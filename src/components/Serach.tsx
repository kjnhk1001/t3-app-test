"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  // 現在の URL のパラメータにアクセスできる
  const searchParams = useSearchParams();
  // 現在の URL のパス名を読み取ることができる
  const pathname = usePathname();
  // ナビゲート
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // 現在のパス＋作成したクエリのパスに遷移
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="">
      <input
        className=""
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // URLと入力を同期させる
        value={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
// "use client";

// export default function Search() {
//   function handleSearch(term: string) {
//     console.log(term);
//   }
//   return (
//     <div >
//       <input
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//       />
//     </div>
//   );
// }
