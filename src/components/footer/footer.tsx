"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative bg-white text-black pt-10 pb-5 overflow-hidden border-t border-neutral-100">
      
      {/* Top Yellow Gradient Strip removed as requested */}

      <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-14">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Link href="/" className="hover:opacity-90 transition-opacity mb-4">
            <Image 
              src="/3.png" 
              alt="B & Wings Logo" 
              width={200} 
              height={80}
              className="w-auto h-16 object-contain"
              priority
            />
          </Link>

          <p className="mt-2 text-gray-600 leading-relaxed text-sm">
            Building brands with digital wings through strategy, design,
            development, and performance marketing.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/bandwingsofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-400 hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/b-and-wings/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-400 hover:text-white transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://wa.me/918792496446?text=Hello%20B%20and%20Wings%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-400 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-5 text-black relative inline-block">
            Company
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400" />
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            {["About", "Projects", "Services", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-5 text-black relative inline-block">
            Legal
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400" />
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <Link href="/privacy-policy" className="relative group">
                Privacy Policy
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="relative group">
                Terms of Use
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/return-refund-policy" className="relative group">
                Return & Refund Policy
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="relative group">
                Disclaimer
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-5 text-black relative inline-block">
            Contact
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400" />
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-500 flex-shrink-0" />
              <span>bandwingsofficial@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-yellow-500 flex-shrink-0" />
              <span>+91 87924 96446</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>
                8th cross, yallappa garden <br />
                malleshwaram, bengaluru.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-neutral-100 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">B & Wings</span>. 
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}