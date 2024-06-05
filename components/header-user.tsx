"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";

export const HeaderUser = () => {
  const session = useSession();
  // console.log(session);

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        {session?.data?.user ? <h2>{session?.data?.user?.name}</h2> : "Login"}
      </PopoverTrigger>
      {session?.data?.user && (
        <PopoverContent className="w-40 cursor-pointer">
          <p
            className="text-sm p-2 text-muted-foreground hover:bg-black hover:text-white"
            onClick={() => signOut()}
          >
            Log Out
          </p>
        </PopoverContent>
      )}
    </Popover>
  );
};
