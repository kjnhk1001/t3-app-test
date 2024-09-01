"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>ルートレイアウトでエラーが発生しました</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>もう一度実行する</button>
      </body>
    </html>
  );
}
