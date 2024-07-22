"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface SidebarItemsProps {
  name: string;
  icon: any;
  link: string;
  isActive: boolean;
}

export const SidebarList = ({
  name,
  icon,
  link,
  isActive,
}: SidebarItemsProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex text-white items-center hover:no-underline rounded-md p-3 my-1 hover:bg-neutral-800",
        isActive && "bg-neutral-800"
      )}
      onClick={() => router.push(link)}
    >
      {icon}
      {name}
    </div>
  );
};
