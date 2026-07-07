import { NextResponse } from "next/server";
import { AGE_GATE_COOKIE, ageGateConfig } from "@/lib/ageGate";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(AGE_GATE_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: ageGateConfig.cookieSameSite,
    maxAge: 60 * 60 * 24 * ageGateConfig.sessionDurationDays,
    path: "/",
  });
  return res;
}
