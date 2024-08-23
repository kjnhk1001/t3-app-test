// import Search from "@/components/Serach";
// import Table from "@/components/Table";
// import { api } from "@/trpc/server";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   const query = searchParams?.query ?? "";
//   const hello = await api.chat.hello({ text: "search" });

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e3d4f8] to-[#d3d5f7]">
//       <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>

//       <Search />
//       <Table query={query} />
//     </main>
//   );
// }
import Search from "@/components/Serach";
import Table from "@/components/Table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query ?? "";
  return (
    <div>
      <Search />
      <Table query={query} />
    </div>
  );
}
