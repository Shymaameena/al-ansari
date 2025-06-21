"use client";
import { useNavbar } from "@/hooks/navbar-context";
import { cn } from "@/lib/utils";
import NavbarHeader from "./navbar-header";

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
      <NavbarHeader
        className={cn(
          "transition-all duration-500  ease-in-out overflow-hidden",
          {
            "opacity-100 max-h-20 translate-y-0": showTopBar, // Adjust max-h to your navbar height
            "opacity-0 max-h-0 -translate-y-full p-0": !showTopBar,
          }
        )}
      />
      <div
        className={cn("", {
          "": !showTopBar,
        })}
      >
        {children}
      </div>
    </div>
  );
}
