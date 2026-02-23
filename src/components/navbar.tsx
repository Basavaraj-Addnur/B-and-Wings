"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Fixed header height using h-20 (scrolled) and h-24 (normal) to prevent jumping
      className={`fixed top-0 w-full z-[100] transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-neutral-100 flex items-center ${
        scrolled ? "h-20 shadow-sm" : "h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-8">
        {/* Logo Section */}
        <div className="relative w-48 h-full flex items-center">
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity absolute left-0"
          >
            <Image 
              src="/1.png" 
              alt="B & Wings Logo" 
              width={350} 
              height={120}
              // scale-125 or scale-150 makes the photo larger without pushing the header height
              className="w-auto h-20 md:h-24 object-contain transform scale-125 origin-left"
              priority
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex gap-10 font-bold relative">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-1"
              >
                <span 
                  className={`text-sm tracking-tight transition-colors duration-300 ${
                    active ? "text-black" : "text-neutral-600 group-hover:text-yellow-500"
                  }`}
                >
                  {link.name}
                </span>

                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 overflow-hidden font-bold text-black rounded-full transition-all duration-300 bg-[#FFD600] hover:bg-[#FFC400] shadow-[0_4px_15px_rgba(255,214,0,0.3)]"
          >
            <span className="relative text-sm tracking-tight">
              Get in Touch
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}