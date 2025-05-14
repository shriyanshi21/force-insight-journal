
import React from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />
      <main className={cn("flex-1 overflow-auto p-4", className)}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
