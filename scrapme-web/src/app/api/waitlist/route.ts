import { NextResponse } from "next/server";

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

  return NextResponse.json(
    { ok: true, message: "Accepted. Storage will be connected in L4." },
    { status: 201 }
  );
}
