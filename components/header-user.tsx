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
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Profile</p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <p
                  className="text-sm text-muted-foreground"
                  onClick={() => signOut()}
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};
