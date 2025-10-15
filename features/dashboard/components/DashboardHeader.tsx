"use client";

import { Package } from "lucide-react";
import { useSelector } from "react-redux";

export function DashboardHeader() {
  const userName = useSelector((state: any) => state.auth?.userData?.firstName);
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Package className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            Welcome back {userName}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your products today
          </p>
        </div>
      </div>
    </div>
  );
}
