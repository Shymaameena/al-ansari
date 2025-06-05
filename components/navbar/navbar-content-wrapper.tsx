"use client";
import { useNavbar } from "@/hooks/use-navbar";
import { cn } from "@/lib/utils";

export default function NavBarContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showTopBar } = useNavbar();

  return (
    <div
      className={cn("transition-colors duration-800 ease-in-out", {
        "bg-secondary": !showTopBar,
      })}
    >
      {children}
    </div>
  );
}
