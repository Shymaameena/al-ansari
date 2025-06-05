import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavbarHeaderWrapper from "./navbar-header-wrapper";
import NavBarContentWrapper from "./navbar-content-wrapper";
import Logo from "../logo";

export default function Navbar() {
  //   123 Street, New York,
  //   USA
  // Follow us:
  type TNavItems = {
    label: string;
    href: string;
  };

  const navItems: TNavItems[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="fixed w-full z-50">
      <NavbarHeaderWrapper>
        <div className="border-b border-muted-foreground flex justify-between items-center px-20 py-2 font-thin text-sm tracking-wide text-muted">
          <div className="flex items-center gap-2.5">
            <MailIcon className="" strokeWidth={""} size={16} />
            info@ansarigroup.co
          </div>
          <div className="flex items-center gap-2">
            <p>Follow us:</p>
            <div className="flex gap-2">
              <FaFacebookF size={18} className="text-muted-foreground " />
              <FaLinkedinIn size={20} className="text-muted-foreground " />
              <FaInstagram size={20} className="text-muted-foreground " />{" "}
            </div>
          </div>
        </div>
      </NavbarHeaderWrapper>
      <NavBarContentWrapper>
        <div className="h-20 flex items-center justify-between px-16 text-white">
          <Logo />
          {/* <Image src={Logo} alt="" width={720} height={480} className="w-40" /> */}
          <ul className="flex font-bold text-[16px] gap-8">
            {navItems.map((item, index) => {
              return (
                <li
                  key={`${item.href}-${item.label}-${index}`}
                  className="hover:text-primary"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavBarContentWrapper>
    </div>
  );
}
