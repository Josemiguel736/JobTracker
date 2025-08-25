import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const nextResponse = NextResponse.next({ request });
  const cookiesHandler = await cookies();

  const isLogged = cookiesHandler.get("isLogged");

  // Redirect to login page if not logged in
  
  if (request.nextUrl.pathname.startsWith("/dashboard") && !isLogged) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url);

  }else if(request.nextUrl.pathname.startsWith("/login") && isLogged){
    const url = request.nextUrl.clone()
    url.pathname = "/dashboard"
    return NextResponse.redirect(url);}

  return nextResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
