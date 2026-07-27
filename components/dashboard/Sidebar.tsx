"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Stethoscope,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
    icon: CalendarDays,
  },
  {
    title: "Patients",
    href: "/dashboard/patients",
    icon: Users,
  },
  {
    title: "Treatments",
    href: "/dashboard/treatments",
    icon: Stethoscope,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Invoices",
    href: "/dashboard/invoices",
    icon: FileText,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-24 flex items-center justify-center border-b">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#B08D57]">
            Dental Studio
          </h1>

          <p className="text-sm text-gray-500">
            Clinic Management
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-5 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-[#B08D57] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#F6F1E8]"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-5">
        <div className="rounded-xl bg-[#F8F6F2] p-4">
          <p className="font-semibold text-gray-800">
            Dr. Syed Mohsin Raza
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Administrator
          </p>
        </div>
      </div>
    </aside>
  );
}