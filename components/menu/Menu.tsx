import { validate } from "@/app/actions";
import Logout from "../Logout";
import NewListButton from "./NewListButton";
import { ModeToggle } from "./ModeToggle";
import RegisterButton from "./RegisterButton";

export default async function Menu(props: { children?: React.ReactNode }) {
  const { children } = props;
  const { loggedIn } = await validate();
  return (
    <div className="fixed flex items-center p-2 w-screen z-10 border-b gap-2">
      <h1 className="text-2xl font-bold">Next.js App Template</h1>
      {children}
      <div className="flex-grow" />
      <div className="flex gap-2 items-center">
        <NewListButton />
        {loggedIn ? <Logout /> : <RegisterButton />}
        <ModeToggle />
      </div>
    </div>
  );
}
