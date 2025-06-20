import { MailIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import NavbarHeaderWrapper from "./navbar-header-wrapper";
import NavBarContentWrapper from "./navbar-content-wrapper";
import Logo from "../logo";
import MobileNavButton from "./MobileNavButton";
import MobileMenu from "./mobile-menu";
export type TNavItems = typeof navItems
const navItems = [
  { dropDownItems: [], dropDown: false, href: "/", label: "Home" },
  { dropDownItems: [], dropDown: false, href: "/about", label: "About" },
  { dropDownItems: [], dropDown: false, href: "/services", label: "Services" },
  {
    dropDownItems: [
      { itemLabel: "Earth moving", itemHref: "/earth-moving" },
      { itemLabel: "Lifting", itemHref: "/lifting" },
      { itemLabel: "Transport", itemHref: "/transport" },
      { itemLabel: "Power", itemHref: "/power" },
    ],
    dropDown: true,
    href: "",
    label: "Our Fleet",
  },
  { dropDownItems: [], dropDown: false, href: "/contact", label: "Contact" },
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
                    className=""
                  >
                    {!item.dropDown ? (
                      <Link
                        className="hover:text-primary transition-colors"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="relative group">
                        <p className="hover:text-primary transition-colors cursor-alias">{item.label}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 group-hover:block hidden w-40">
                          {item.dropDownItems.length && (
                            <ul className="py-2 mt-5 bg-card text-secondary rounded-md ">
                              {item.dropDownItems?.map((item, index) => {
                                return (
                                  <li
                                    key={`${index}-${item.itemHref}-${item.itemLabel}`}
                                    className="hover:text-primary transition-colors py-1 cursor-pointer hover:bg-muted px-4"
                                  >
                                    <Link href={item.itemHref} className="">
                                      {item.itemLabel}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
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
