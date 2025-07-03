import Link from "next/link";
import NavBarContentWrapper from "./navbar-content-wrapper";
import Logo from "../logo";
import MobileNavButton from "./MobileNavButton";
import MobileMenu from "./mobile-menu";

export type TNavItems = typeof navItems;

const navItems = [
  { dropDownItems: [], dropDown: false, href: "/", label: "Home" },
  { dropDownItems: [], dropDown: false, href: "/about", label: "About Us" },
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
  { dropDownItems: [], dropDown: false, href: "/contact", label: "Contact Us" },
];

export default function ResponsiveNavbar() {
  return (
    <div className="">
      <div className="fixed z-50 w-full">
        <NavBarContentWrapper>
          <div className="flex h-20 items-center justify-between px-4 text-white md:px-8 lg:px-16">
            <Link href={"/"}>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden  text-[16px] md:flex md:gap-4 lg:gap-8">
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
                        <p className="hover:text-primary transition-colors cursor-alias">
                          {item.label}
                        </p>
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
