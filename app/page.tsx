import LoginForm from "@/components/Login";
import DnD from "@/components/dnd/DnD";
import { getLists, validate } from "./actions";
import TransformContextProvider from "@/components/canvas/TransformProvider";

export default async function Home() {
  const { loggedIn, userId } = await validate();
  if (!loggedIn) {
    return (
      <main className="pt-16 h-screen flex flex-col items-center">
        <LoginForm />
      </main>
    );
  }

  if (!userId) {
    throw new Error("No user ID");
  }

  const lists = await getLists(userId);

  return (
    <main className="h-screen w-screen">
      <TransformContextProvider>
        <DnD lists={lists} />
      </TransformContextProvider>
    </main>
  );
}
