"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react"; // Importing the arrow icon

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          B<span className="text-yellow-500">&</span>Wings
        </Link>

        {/* Menu */}
        <div className="flex gap-12 font-medium relative">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-yellow-500">
                  {link.name}
                </span>

                {/* animated underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Magnetic CTA - Updated to match the "Get Started" style */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-4 py-2 overflow-hidden font-bold text-black rounded-full transition-all duration-300 bg-gradient-to-r from-[#FFCC00] via-[#FFB300] to-[#FF6600] shadow-[0_4px_20px_rgba(255,165,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,165,0,0.4)]"
          >
            <span className="relative text-lg tracking-tight">
              Get Started
            </span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}