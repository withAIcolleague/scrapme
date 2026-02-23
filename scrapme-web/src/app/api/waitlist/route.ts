import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type WaitlistPayload = {
  email?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: WaitlistPayload;

  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const email = payload.email?.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Invalid email format." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const tableName = process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist_emails";

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { ok: false, message: "Missing Supabase environment variables." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase
    .from(tableName)
    .insert([{ email, source: "landing" }]);

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { ok: false, message: "This email is already registered." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "Failed to save your email." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { ok: true, message: "Saved to waitlist." },
    { status: 201 }
  );
}
