"use client";
import { useState } from "react";
import { api } from "@/trpc/react";

export function ClientPost() {
  const [message, setMessage] = useState("");
  // tRPC のユーティリティ関数を提供するフック
  const utils = api.useUtils();

  // 最新のメッセージ取得
  const { data: latestPost } = api.chat.getLatest.useQuery();
  // メッセージを投稿
  const createPost = api.chat.create.useMutation({
    onSuccess: async () => {
      // chatに関するキャッシュが削除される
      await utils.chat.invalidate();
      setMessage("");
    },
  });

  return (
    <div>
      {latestPost ? (
        <p>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name: message });
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={createPost.isPending}>
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
