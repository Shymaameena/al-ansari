"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useNavbar } from "@/hooks/navbar-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { TNavItems } from "./navbar";

interface MobileMenuProps {
  navItems: TNavItems;
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
            <ul className="flex flex-col items-center space-y-6 text-center w-full max-w-sm">
              {navItems.map((item, index) => (
                <motion.li
                  key={`mobile-${item.href}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-2xl font-bold text-white w-full"
                >
                  {item.dropDown ? (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="text-2xl font-bold flex justify-center items-center text-white hover:text-primary hover:no-underline py-2 px-4">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <ul className="space-y-3 mt-2">
                            {item.dropDownItems.map((dropItem, dropIndex) => (
                              <motion.li
                                key={`dropdown-${dropItem.itemHref}-${dropIndex}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropIndex * 0.1 }}
                              >
                                <Link
                                  href={`${dropItem.itemHref}`}
                                  className="block px-6 py-2 text-lg font-medium text-gray-300 hover:text-primary hover:bg-white/10 rounded-md transition-all"
                                  onClick={closeMobileMenu}
                                >
                                  {dropItem.itemLabel}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 hover:text-primary transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
