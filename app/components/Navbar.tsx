"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Building2 size={18} />
          </div>

          <div className="leading-tight">
            <h1 className="font-semibold text-gray-900">
              CosmoBusiness
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              Local services marketplace
            </p>
          </div>
        </Link>

        {/* Right side (optional future buttons) */}
        <div className="flex items-center gap-3">

          <button className="text-sm text-gray-600 hover:text-gray-900">
            Explore
          </button>

          <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>

        </div>

      </div>
    </header>
  );
}
