import { auth } from "@/auth";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { SessionProvider } from "next-auth/react";

export const Dashboardlayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="flex">
        <div className="w-64 z-0  hidden md:block flex-shrink-0 ">
          <Sidebar />
        </div>
        <div className="pt-16 w-full">{children}</div>
      </div>
    </SessionProvider>
  );
};
export default Dashboardlayout;
