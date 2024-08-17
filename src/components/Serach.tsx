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
    console.log("searchParams", searchParams);
    console.log("params", params);
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
      <label htmlFor="search">Search</label>
      <input
        className=""
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // URLと入力を同期させる
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
