import { signinMock } from "@/services/signin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export type LoginData = {
    name: string;
}

export async function POST(request: NextRequest) {
  const { email, password, rememberMe } = await request.json();

  const response: LoginData | null = await signinMock(email, password);

  if (!response) {
    return NextResponse.json({ success: false });
  }

  const cookiesHandler = await cookies();
  cookiesHandler.set("rememberMe", String(rememberMe));
  cookiesHandler.set("isLogged", "true");
  cookiesHandler.set("email", email);
  cookiesHandler.set("name", response.name);

  return NextResponse.json({ success: true, user: response });
}