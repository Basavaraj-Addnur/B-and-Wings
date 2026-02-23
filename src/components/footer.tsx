"use client";

import Link from "next/link";
import ScrollFloat from "@/components/ScrollFloat";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative bg-white text-black pt-20 pb-10 overflow-hidden">
      
      {/* Top Yellow Gradient Strip */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">
        
        {/* Brand Section */}
        <div>
          {isMounted && (
            <ScrollFloat
              animationDuration={0.7}
              stagger={0.05}
              scrollStart="top 95%"
              scrollEnd="top 80%"
              textClassName="text-3xl font-extrabold text-black"
            >
              B & Wings
            </ScrollFloat>
          )}

          <p className="mt-5 text-gray-600 leading-relaxed text-sm">
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

        {/* Company */}
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

        {/* Services */}
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-5 text-black relative inline-block">
            Services
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400" />
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-yellow-500 transition">
              Web Development
            </li>
            <li className="hover:text-yellow-500 transition">
              UI/UX Design
            </li>
            <li className="hover:text-yellow-500 transition">
              Performance Marketing
            </li>
            <li className="hover:text-yellow-500 transition">
              Social Media Strategy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold uppercase tracking-wider text-sm mb-5 text-black relative inline-block">
            Contact
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400" />
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-500" />
              <span>connect@bandwings.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-yellow-500" />
              <span>+91 87924 96446</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-yellow-100 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">B & Wings</span>. 
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}