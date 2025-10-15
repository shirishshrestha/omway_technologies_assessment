"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

export function AppHeader() {
  const userData = useSelector((state: any) => state.auth?.userData);
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />

      <div className="flex flex-1 items-center justify-between">
        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">
              {userData?.firstName} {userData?.lastName}
            </p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Avatar className="h-9 w-9">
            <AvatarImage src={userData?.image} alt={userData?.firstName} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userData?.firstName?.charAt(0)}
              {userData?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
