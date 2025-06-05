import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronUp,
} from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6 relative">
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
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
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
                <p className="text-sm leading-relaxed">
                  Office No.2, Floor No.1, Gate No.3,
                  <br />
                  Town Centre, Bin Omran, Doha, Qatar,
                  <br />
                  P.O BOX:1265
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <p className="text-sm">+974 44505700</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <p className="text-sm">info@ansarigroup.co</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} About Us
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {">"} Contact Us
              </Link>
              <Link
                href="#"
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
              href="#"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded font-medium transition-colors inline-block"
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
      <button className="absolute bottom-6 right-6 bg-orange-400 hover:bg-orange-500 text-white w-10 h-10 rounded flex items-center justify-center transition-colors">
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}
