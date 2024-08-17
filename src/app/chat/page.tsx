// import { chatFormAction } from "@/lib/actions";
// import { api } from "@/trpc/server";
// export default async function Page() {
//   const hello = await api.chat.hello({ text: "chat" });
//   const messages = await api.chat.getAllMessage();

//   void api.post.getLatest.prefetch();
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e3d4f8] to-[#d3d5f7]">
//       <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>
//       {messages.map((message) => (
//         <p key={message.id}>{message.name}</p>
//       ))}
//       <form action={chatFormAction}>
//         <input type="text" name="message" />
//         <button type="submit" defaultValue="">
//           送信
//         </button>
//       </form>
//     </main>
//   );
// }

// サーバーアクションのデータフェッチ例
import { chatFormAction } from "@/lib/actions";
export default async function Page() {
  return (
    <div>
      <form action={chatFormAction}>
        <input type="text" name="message" />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

// // サーバーコンポーネントのデータフェッチ例
// import { api } from "@/trpc/server";
// export default async function Page() {
//   // 直接呼び出すことができる
//   const messages = await api.chat.getAllMessage();
//   return (
//     <div>
//       {messages.map((message) => (
//         <p key={message.id}>{message.name}</p>
//       ))}
//     </div>
//   );
// }
