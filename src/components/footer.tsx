"use client";

import Link from "next/link";
import ScrollFloat from "@/components/ScrollFloat";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Syncing with your Lenis smooth scroll for accurate GSAP triggers
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="mb-4">
            {isMounted && (
              <ScrollFloat
                animationDuration={0.7}
                stagger={0.05}
                scrollStart="top 95%"
                scrollEnd="top 80%"
                textClassName="text-2xl font-bold text-black text-left"
              >
                B and Wings
              </ScrollFloat>
            )}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Building brands with digital wings through strategy, design,
            development, and performance marketing.
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="mb-4">
            {isMounted && (
              <ScrollFloat
                stagger={0.03}
                scrollStart="top 95%"
                scrollEnd="top 85%"
                textClassName="font-bold text-black text-left uppercase tracking-wider text-sm"
              >
                Company
              </ScrollFloat>
            )}
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-yellow-500 transition-colors"><Link href="/about">About</Link></li>
            <li className="hover:text-yellow-500 transition-colors"><Link href="/projects">Projects</Link></li>
            <li className="hover:text-yellow-500 transition-colors"><Link href="/services">Services</Link></li>
            <li className="hover:text-yellow-500 transition-colors"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="mb-4">
            {isMounted && (
              <ScrollFloat
                stagger={0.03}
                scrollStart="top 95%"
                scrollEnd="top 85%"
                textClassName="font-bold text-black text-left uppercase tracking-wider text-sm"
              >
                Services
              </ScrollFloat>
            )}
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Performance Marketing</li>
            <li>Social Media Strategy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-4">
            {isMounted && (
              <ScrollFloat
                stagger={0.03}
                scrollStart="top 95%"
                scrollEnd="top 85%"
                textClassName="font-bold text-black text-left uppercase tracking-wider text-sm"
              >
                Contact
              </ScrollFloat>
            )}
          </div>
          <div className="space-y-2">
            {isMounted && (
              <>
                <ScrollFloat
                  stagger={0.01}
                  scrollStart="top 98%"
                  scrollEnd="top 90%"
                  textClassName="text-gray-600 block text-left"
                >
                  hello@bandwings.com
                </ScrollFloat>
                <ScrollFloat
                  stagger={0.01}
                  scrollStart="top 98%"
                  scrollEnd="top 90%"
                  textClassName="text-gray-600 block text-left"
                >
                  +91 88888 88888
                </ScrollFloat>
              </>
            )}
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} B & Wings. All rights reserved.
      </div>
    </footer>
  );
}