import { cn } from "@/lib/utils";
import logo from "@/public/images/logo2.png";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt=""
      width={720}
      height={480}
      className={cn("w-40", className)}
    />
  );
}
