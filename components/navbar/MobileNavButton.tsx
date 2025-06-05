"use client";

import { Menu } from "lucide-react";
import { useNavbar } from "@/hooks/navbar-context";

export default function MobileNavButton() {
  const { toggleMobileMenu, isMobileMenuOpen } = useNavbar();

  return (
    <button
      onClick={toggleMobileMenu}
      className="rounded p-1 text-white hover:bg-white/10 md:hidden"
      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
    >
      <Menu size={24} />
    </button>
  );
}
