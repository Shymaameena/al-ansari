import { MailIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import NavbarHeaderWrapper from "./navbar-header-wrapper";
import NavBarContentWrapper from "./navbar-content-wrapper";
import Logo from "../logo";
import MobileNavButton from "./MobileNavButton";
import MobileMenu from "./mobile-menu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function ResponsiveNavbar() {
  return (
    <div className="">
      <div className="fixed z-50 w-full">
        <NavbarHeaderWrapper>
          <div className="flex items-center  justify-between border-b border-muted-foreground px-4 py-2 font-thin text-sm tracking-wide text-muted md:px-8 lg:px-20">
            <div className="flex items-center gap-2.5">
              <MailIcon className="" strokeWidth={1} size={16} />
              <span className="hidden sm:inline">info@ansarigroup.co</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="hidden sm:block">Follow us:</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <FaFacebookF size={16} className="text-muted-foreground" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <FaLinkedinIn size={18} className="text-muted-foreground" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <FaInstagram size={18} className="text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </NavbarHeaderWrapper>
        <NavBarContentWrapper>
          <div className="flex h-20 items-center justify-between px-4 text-white md:px-8 lg:px-16">
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden font-bold text-[16px] md:flex md:gap-4 lg:gap-8">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={`${item.href}-${item.label}-${index}`}
                    // whileHover={{ scale: 1.05 }}
                    className="hover:text-primary transition-colors"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <MobileNavButton />
          </div>
        </NavBarContentWrapper>
      </div>
      <MobileMenu navItems={navItems} />
    </div>
  );
}
