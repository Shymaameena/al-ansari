import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NavbarHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-gray-700 px-4 py-2 text-sm tracking-wide text-muted-foreground md:px-8 lg:px-20",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <MailIcon className="" strokeWidth={1} size={16} />
        <span className="hidden sm:inline font-sans">info@ansarigroup.co</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="hidden sm:block">Follow us:</p>
        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com/people/Al-Ansari-Transport-Enterprises-WLL/100095544335543/"
            aria-label="Facebook"
            className="hover:text-primary transition-colors"
          >
            <FaFacebookF size={16} className="text-muted-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/al-ansari-transport-and-enterprises-455b53253/"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedinIn size={18} className="text-muted-foreground" />
          </Link>
          <Link
            href="https://www.instagram.com/al_ansari_transport"
            aria-label="Instagram"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram size={18} className="text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  );
}
