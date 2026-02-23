"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
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
      // Changed to always have a white background (bg-white/90) and backdrop blur
      className={`fixed top-0 w-full z-[100] transition-all duration-500 bg-white/90 backdrop-blur-md border-b border-neutral-100 ${
        scrolled ? "py-3 shadow-sm" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter hover:opacity-80 transition text-black"
        >
          B<span className="text-yellow-500">W</span>ings
        </Link>

        {/* Menu */}
        <div className="flex gap-10 font-semibold relative">
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

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
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