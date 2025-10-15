import type React from "react";
import "../globals.css";
import { Suspense } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader, AppSidebar } from "@/features";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="flex-1">
          <AppHeader />
          <div className="flex-1">{children}</div>
        </main>
      </SidebarProvider>
    </Suspense>
  );
}
