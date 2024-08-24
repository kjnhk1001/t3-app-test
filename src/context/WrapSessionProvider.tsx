"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type WrapSessionProvider = {
  children: ReactNode;
};
// SessionProviderをサーバーコンポーネントで直接importして使えないためラップしたプロバイダーを作成する
export const WrapSessionProvider = ({ children }: WrapSessionProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};
