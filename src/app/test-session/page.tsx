import { getServerAuthSession } from "@/server/auth";

import { WrapSessionProvider } from "@/context/WrapSessionProvider";
import { ClientSession } from "@/components/ClientSession";

export default async function Home() {
  const session = await getServerAuthSession();
  console.log("セッション😌", session);
  return (
    <div>
      セッション取得
      <WrapSessionProvider>
        <ClientSession />
      </WrapSessionProvider>
    </div>
  );
}
