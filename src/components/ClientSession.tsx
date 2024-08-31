"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

import React from "react";

export const ClientSession = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);
  return (
    <div>
      クライアントサイドセッション取得
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
