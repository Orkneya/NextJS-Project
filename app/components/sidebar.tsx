"use client";
import React from "react";
import Image from "next/image";
import SidebarItem from "./sidebar-item";
import { usePathname, useRouter } from "next/navigation";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <div className="flex items-center justify-center gap-[10px] py-8 mb-11">
          <Image width={25} height={25} src="/icon/Vector.png" alt="logo" />
          <span className="font-medium text-zinc-50">TruScape</span>
        </div>
        <ul className="space-y-7">
          <SidebarItem
            current={pathName === "/dashboard"}
            pathname="/dashboard"
            src="/icon/Vector-Stroke.png"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathName === "/companies"}
            pathname="/companies"
            src="/icon/briefcase.png"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/icon/arrow-left-on-rectangle.png"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
