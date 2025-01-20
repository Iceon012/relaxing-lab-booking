"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  BarChart2,
  HelpCircle,
  MessageSquare,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: BarChart2, label: "Reports", href: "/reports" },
];

const bottomNavItems = [
  { icon: HelpCircle, label: "Help Center", href: "/help" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 border-r border-gray-200 pt-5 pb-4 flex-col bg-white">
      <div className="px-6 mb-6">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <span className="ml-2 text-xl font-semibold">Arvs-dev</span>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
              pathname === item.href
                ? "text-green-600 bg-green-50"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-4 space-y-1">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
