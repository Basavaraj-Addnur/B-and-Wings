"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-white text-black pt-10 pb-5 overflow-hidden border-t border-neutral-100">
      {/* Design Element: Subtle Background "Wing" Gradient */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-yellow-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section - Span 4 */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <motion.div variants={itemVariants} className="mb-2">
              <Link href="/" className="inline-block hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/3.png" 
                  alt="B & Wings Logo" 
                  width={200} 
                  height={80}
                  className="w-auto h-14 object-contain"
                  priority
                />
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-500 leading-relaxed text-base max-w-sm">
              Building brands with <span className="text-black font-medium">digital wings</span> through strategy, design, 
              development, and performance marketing.
            </motion.p>

            {/* Enhanced Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bandwingsofficial/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/b-and-wings/" },
                { icon: MessageCircle, href: "https://wa.me/918792496446?text=Hello" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-neutral-600 hover:text-white hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
                >
                  <social.icon size={20} className="relative z-10" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Company Column - Span 2 */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-bold uppercase tracking-[0.15em] text-xs mb-8 text-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />Company
            </h3>
            <ul className="space-y-4 text-gray-600">
              {["About", "Projects", "Services", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-black transition-colors duration-300 flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column - Span 2 */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-bold uppercase tracking-[0.15em] text-xs mb-8 text-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />Legal              
            </h3>
            <ul className="space-y-4 text-gray-600">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-use" },
                { name: "Refund Policy", path: "/return-refund-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="text-sm hover:text-black transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column - Span 4 */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:pl-10">
            <h3 className="font-bold uppercase tracking-[0.15em] text-xs mb-8 text-black flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-yellow-400" />Get in Touch              
            </h3>

            <div className="space-y-6">
              <a href="mailto:bandwingsofficial@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Email us</span>
                  <span className="text-sm font-medium">bandwingsofficial@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918792496446" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Call us</span>
                  <span className="text-sm font-medium">+91 87924 96446</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Visit us</span>
                  <span className="text-sm leading-relaxed">
                    8th cross, yallappa garden <br />
                    malleshwaram, bengaluru.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[11px] text-gray-400 tracking-wider uppercase">
            © {currentYear} <span className="text-black font-bold">B & Wings</span>. All rights reserved.
          </p>
          
          <div className="flex gap-6">
             <span className="text-[11px] text-gray-400 uppercase tracking-widest">Digital Marketing Agency Bangalore</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}