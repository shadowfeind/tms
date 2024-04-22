"use client";

import { useMobileSidebar } from "@/hooks/useMobileSidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "./ui/sheet";
import { Sidebar } from "./sidebar";

const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  //perils of hydration read the blog to understand
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"ghost"}
        className="block md:hidden"
        size={"sm"}
      >
        <Menu className="w-4 h-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side={"left"} className="p-2 pt-10 bg-neutral-950">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
