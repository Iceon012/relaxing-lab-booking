"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  BarChart2,
  FileText,
  Heart,
  Briefcase,
  Users,
  Building2,
  Wallet,
  HelpCircle,
  MessageSquare,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: BarChart2, label: "Reports", href: "/reports" },
  { icon: FileText, label: "Notes", href: "/notes" },
  { icon: Heart, label: "Benefits", href: "/benefits", isNew: true },
  { icon: Briefcase, label: "Job", href: "/job" },
  { icon: Users, label: "Candidate", href: "/candidate" },
  { icon: Building2, label: "Company", href: "/company" },
  { icon: Wallet, label: "Payment", href: "/payment" },
];

const bottomNavItems = [
  { icon: HelpCircle, label: "Help Center", href: "/help" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <span className="text-xl font-semibold">Arvs-dev</span>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto ">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 px-2 py-3 rounded-lg mb-1 ${
              pathname === item.href
                ? "bg-purple-100 text-purple-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
            {item.isNew && (
              <span className="ml-auto text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                NEW
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-2 px-2 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
