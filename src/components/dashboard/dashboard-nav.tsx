"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Grid, Settings, Wand2, LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Projects",
    href: "/dashboard",
    icon: Layers,
  },
  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: Grid,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="relative">
          <Wand2 className="text-blue-600" size={24} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
        </div>
        <span className="font-bold text-xl">BuildYourApp.ai</span>
      </div>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg group transition-all duration-300",
              pathname === item.href
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <item.icon
              size={20}
              className="group-hover:-rotate-12 transition-transform duration-300"
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t">
        <div className="flex items-center justify-between px-2">
          <UserButton afterSignOutUrl="/" />
          <Link
            href="/sign-out"
            className="flex items-center text-sm text-gray-500 gap-2 hover:text-gray-700"
          >
            <LogOut size={16} />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
