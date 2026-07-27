"use client";

import { Bell, LogOut, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Topbar() {
  const router = useRouter();

  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/login");

    router.refresh();
  }

  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Good Morning, Dr. Mohsin 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back to Dental Studio Dashboard
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}

        <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 bg-transparent outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border bg-white p-3 shadow-sm hover:bg-gray-50">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Doctor */}

        <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-2 shadow-sm">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B08D57] text-lg font-bold text-white">
            M
          </div>

          <div>

            <p className="font-semibold">
              Dr. Syed Mohsin Raza
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>
    </div>
  );
}