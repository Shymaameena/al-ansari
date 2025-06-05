"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function NavbarHeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowTopBar(false);
      } else {
        // scrolling up
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className={cn("", { hidden: !showTopBar, block: showTopBar })}>
      {children}
    </div>
  );
}
