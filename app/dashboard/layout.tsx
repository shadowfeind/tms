import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Dashboardlayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-64 h-screen bg-neutral-950  hidden md:block flex-shrink-0 px-4 pt-16">
          <Sidebar />
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </div>
  );
};
export default Dashboardlayout;
