import { HeaderUser } from "./header-user";
import MobileSidebar from "./moble-sidebar";

export const Header = () => {
  return (
    <div className="w-full fixed z-50 top-0 h-14 border-b shadow-sm bg-white flex items-center justify-between px-5">
      <MobileSidebar />
      <h1 className="font-bold drop-shadow">Task manager</h1>
      <HeaderUser />
    </div>
  );
};
