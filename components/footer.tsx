import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "./logo";
import BackToTopButton from "./buttons/BackToTop";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <Logo />
            {/* <div>
            <h2 className="text-2xl font-bold tracking-wider">AL ANSARI</h2>
            <p className="text-sm tracking-widest text-gray-300">TRANSPORT</p>
          </div> */}
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/people/Al-Ansari-Transport-Enterprises-WLL/100095544335543/"
                target="_blank"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/al-ansari-transport-and-enterprises-455b53253/"
                target="_blank"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/al_ansari_transport"
                target="_blank"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <Link
                  href={
                    "https://www.google.com/maps/place/AL+ANSARI+TRANSPORT+%26+ENTERPRISES+W.L.L/@25.0781385,51.5284092,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45db3c2ab0bcd5:0x811ea21eb7725684!8m2!3d25.0781386!4d51.5332801!16s%2Fg%2F11dxb7_rb5?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                >
                  <p className="text-sm leading-relaxed">
                    Building No .24, Street No .61, Area 62,
                    <br />
                    Logistic Park-A ,Birkat Al Awamer, Doha, Qatar,
                    <br />
                    P.O Box 1265
                  </p>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <Link className="text-sm" href={`tel:+974 44505700`}>
                  +974 44505700
                </Link>
                <Link className="text-sm" href={`tel:+974 44505800`}>
                  +974 44505800
                </Link>
              </div>
              <Link
                className="flex items-center space-x-2"
                href={"mailto:info@ansarigroup.co"}
                target="_blank"
              >
                <Mail size={16} />
                <p className="text-sm">info@ansarigroup.co</p>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} Contact Us
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} Our Services
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} Terms & Condition
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} Support
              </Link>
            </nav>
          </div>

          {/* Download Brochure */}
          <div className="flex justify-start h-fit lg:justify-end">
            <Link
              href="/doc/ATE-PROFILE.pdf"
              target="_blank"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded font-medium transition-colors inline-block w-full max-w-[200px]"
            >
              Download Brochure
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-teal-700">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025{" "}
            <span className="text-white">
              Al Ansari Transport & Enterprises W.L.L.
            </span>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <BackToTopButton />
    </footer>
  );
}
