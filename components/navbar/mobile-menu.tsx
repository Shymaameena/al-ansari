"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useNavbar } from "@/hooks/navbar-context";

interface MobileMenuProps {
  navItems: { href: string; label: string }[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const { isMobileMenuOpen, closeMobileMenu } = useNavbar();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-secondary pt-16"
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={closeMobileMenu}
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex h-full flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-6 text-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={`mobile-${item.href}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-2xl font-bold text-white"
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
