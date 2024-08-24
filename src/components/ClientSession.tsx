"use client";
import { useSession } from "next-auth/react";
import React from "react";

export const ClientSession = () => {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);
  return <div>クライアントサイドセッション取得</div>;
};
