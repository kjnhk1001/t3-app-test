import { ClientSession } from "@/components/ClientSession";
import { WrapSessionProvider } from "@/context/WrapSessionProvider";

export default async function Home() {
  return (
    <>
      <div>
        <WrapSessionProvider>
          <ClientSession />
        </WrapSessionProvider>
      </div>
    </>
  );
}
