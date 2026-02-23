import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type AccessCodePayload = {
  code?: string;
  redirectTo?: string;
};

const ACCESS_COOKIE_NAME = "scrapme_access";

export async function POST(request: Request) {
  let payload: AccessCodePayload;

  try {
    payload = (await request.json()) as AccessCodePayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const code = payload.code?.trim();
  const redirectTo = payload.redirectTo?.trim() || "/editor";

  if (!code) {
    return NextResponse.json(
      { ok: false, message: "Please enter an access code." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const tableName = process.env.SUPABASE_ACCESS_CODES_TABLE ?? "access_codes";

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { ok: false, message: "Missing Supabase environment variables." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const tryByColumn = async (column: string) => {
    return supabase.from(tableName).select("*").eq(column, code).limit(1);
  };

  let result = await tryByColumn("code");
  if (result.error) {
    result = await tryByColumn("access_code");
  }

  if (result.error) {
    return NextResponse.json(
      { ok: false, message: "Access code lookup failed." },
      { status: 500 }
    );
  }

  const row = result.data?.[0] as
    | { is_active?: boolean; expires_at?: string | null }
    | undefined;

  if (!row) {
    return NextResponse.json(
      { ok: false, message: "Invalid access code." },
      { status: 401 }
    );
  }

  if (row.is_active === false) {
    return NextResponse.json(
      { ok: false, message: "This code is inactive." },
      { status: 401 }
    );
  }

  if (row.expires_at && new Date(row.expires_at).getTime() < Date.now()) {
    return NextResponse.json(
      { ok: false, message: "This code has expired." },
      { status: 401 }
    );
  }

  const response = NextResponse.json(
    { ok: true, message: "Access granted.", redirectTo },
    { status: 200 }
  );

  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: "granted",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
