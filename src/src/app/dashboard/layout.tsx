"use client";

import Sidebar from "@/src/components/template/Sidebar";
import { Suspense } from "react";

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayoutInner>
      {children}
    </DashboardLayoutInner>
  );
}

function DashboardLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex">
     <Sidebar />
     <div className = "flex-1 overflow-auto flex flex-col">
        <div className = "flex-1">
            <Suspense fallback="Loading...">
                <div className = {`h-full`}>
                    {children}
                </div>
            </Suspense>
        </div>
    </div>
    </div>
  );
}

