"use server";
import { z } from "zod";
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// フォームのスキーマ設定
const FormSchema = z.object({
  message: z.string(),
});

export async function chatFormAction(formData: FormData) {
  // formData から取得したデータをバリデーション
  // もしバリデーションに失敗した場合、parse はエラーをスロー
  const { message } = FormSchema.parse({
    message: formData.get("message"),
  });
  const res = await api.chat.create({ name: message });

  console.log("送信", message, res);
  revalidatePath("/chat");
  // リダイレクトしなくても最新のデータが表示される
  // テキストボックスの中身が消えない
  redirect("/chat");
}
