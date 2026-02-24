"use client";

import { motion, useScroll, useMotionValueEvent, Variants, AnimatePresence } from "framer-motion";
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
    // Triggers sooner for a smoother transition
    setScrolled(latest > 10);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  const navVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      // Added backdrop-blur-md to prevent "black gap" visual glitches
      // Changed bg-white/90 to bg-white when scrolled for solid feel
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out flex items-center ${
        scrolled 
          ? "h-20 bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" 
          : "h-24 bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 md:px-10">
        
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="flex items-center">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Image 
              src="/1.png" 
              alt="B & Wings Logo" 
              width={180} 
              height={60}
              // Fixed scaling issue to keep logo crisp within container
              className="w-auto h-12 md:h-14 object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="relative group py-2"
                >
                  <span 
                    className={`text-[13px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                      active ? "text-black" : "text-neutral-500 group-hover:text-black"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Animated Underline */}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[3px] bg-yellow-400 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Hover Underline */}
                  {!active && (
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-6 py-3 overflow-hidden font-bold text-black rounded-full transition-all duration-300 bg-[#FFD600] hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
          >
            <span className="relative text-xs tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="relative flex items-center justify-center">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Line (Very subtle) */}
      {!scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-100/50" />
      )}
    </motion.nav>
  );
}