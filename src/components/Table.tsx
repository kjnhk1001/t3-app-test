import { api } from "@/trpc/server";

export default async function Table({ query }: { query: string }) {
  const messages = await api.chat.getSearchMessage({ name: query });
  return (
    <div className="">
      {messages.map((message) => (
        <p key={message.id}>{message.name}</p>
      ))}
    </div>
  );
}
