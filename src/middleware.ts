import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = cookies().get("access_token")?.value;
  // トークンのチェック処理

  if (!token) {
    // 未ログインでログインが必要なページにアクセス -> ログインページにリダイレクト
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
