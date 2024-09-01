export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // throw new Error("レイアウトで予期せぬエラーが発生しました");

  return (
    <div>
      レイアウト
      {children}
    </div>
  );
}
