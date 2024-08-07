import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./NavBar";
import SessionProvider from "./SessionProvider";
import MenuBar from "./MenuBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto flex w-full max-w-full grow gap-5 p-1">
        <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-2 rounded-2xl bg-card px-1 py-2 shadow-sm sm:block lg:px-1 xl:w-40" />
          {children}
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
      </div>
    </SessionProvider>
  );
}
