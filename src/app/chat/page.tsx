import { LatestPost } from "@/app/_components/post";
import { chatFormAction } from "@/lib/actions";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
export default async function Page() {
  const hello = await api.chat.hello({ text: "chatRouter" });
  const messages = await api.chat.getAllMessage();

  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e3d4f8] to-[#d3d5f7]">
      <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>
      {messages.map((message) => (
        <p key={message.id}>{message.name}</p>
      ))}
      {/* {session?.user && <LatestPost />} */}
      <form action={chatFormAction}>
        <input type="text" name="message" />
        <button type="submit" defaultValue="">
          送信
        </button>
      </form>
    </main>
  );
}
