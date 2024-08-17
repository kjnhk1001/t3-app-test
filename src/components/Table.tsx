import { api } from "@/trpc/server";

export default async function Table({ query }: { query: string }) {
  console.log("テーブル", query);
  const messages = await api.chat.getSearchMessage({ name: query });
  console.log("結果", messages);

  return (
    <div className="">
      {messages.map((message) => (
        <p key={message.id}>{message.name}</p>
      ))}
    </div>
  );
}
