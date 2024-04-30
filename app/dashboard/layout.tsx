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
        <div className="w-64 z-0  hidden md:block flex-shrink-0 ">
          <Sidebar />
        </div>
        <div className="pt-16 w-full">{children}</div>
      </div>
    </div>
  );
};
export default Dashboardlayout;
