"use client";

import {
  FileCheck,
  LayoutDashboard,
  MessageCircleMore,
  Trash2,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItemsProps, SidebarList } from "./sidebar-list";

export const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
      link: "/dashboard",
      isActive: pathname === "/dashboard",
    },
    {
      name: "Boards",
      icon: <FileCheck className="w-4 h-4 mr-2" />,
      link: "/dashboard/boards",
      isActive: pathname === "/dashboard/boards",
    },
    {
      name: "Users",
      icon: <User className="w-4 h-4 mr-2" />,
      link: "/dashboard/users",
      isActive: pathname === "/dashboard/users",
    },
    {
      name: "Messages",
      icon: <MessageCircleMore className="w-4 h-4 mr-2" />,
      link: "/dashboard/messages",
      isActive: pathname === "/dashboard/messages",
    },
    {
      name: "Trash",
      icon: <Trash2 className="w-4 h-4 mr-2" />,
      link: "/dashboard/trash",
      isActive: pathname === "/dashboard/trash",
    },
  ];
  return (
    <>
      {routes.map((route: SidebarItemsProps) => (
        <SidebarList
          key={route.link}
          name={route.name}
          icon={route.icon}
          link={route.link}
          isActive={route.isActive}
        />
      ))}
    </>
  );
};
