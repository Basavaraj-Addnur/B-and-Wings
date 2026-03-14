"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollFloat from "@/Animations/ScrollFloat";
import { useState, useEffect } from "react";
import DotGrid from "@/Animations/DotGrid/DotGrid";

export default function CTA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-white text-center relative overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[400px] flex items-center justify-center">

      {/* Background Dot Grid */}
      <DotGrid
        dotSize={2}
        gap={22}
        baseColor="#1a1a2e"
        activeColor="#7042ff"
        proximity={140}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 pointer-events-none">

        {/* Headline */}
        <div className="mb-5 sm:mb-6 pointer-events-auto">
          {isMounted && (
            <ScrollFloat
              animationDuration={1}
              ease="back.out(2)"
              scrollStart="top 100%"
              scrollEnd="top 50%"
              stagger={0.04}
              textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Ready to Scale Your Brand?
            </ScrollFloat>
          )}
        </div>

        {/* Description */}
        <div className="mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto pointer-events-auto">
          {isMounted && (
            <ScrollFloat
              animationDuration={0.8}
              stagger={0.01}
              scrollStart="top 95%"
              scrollEnd="top 60%"
              textClassName="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Let’s build a high-converting digital system tailored for your business.
            </ScrollFloat>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center pointer-events-auto">
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-400 transition-all shadow-xl active:scale-95 text-xs sm:text-sm md:text-base overflow-hidden"
          >
            {isMounted && (
              <ScrollFloat
                stagger={0.04}
                scrollStart="top 100%"
                scrollEnd="top 80%"
                textClassName="text-black font-bold"
              >
                Start Your Project
              </ScrollFloat>
            )}
          </Link>
        </div>
      </div>

      {/* Responsive Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[260px] sm:w-[380px] md:w-[500px] 
                      h-[260px] sm:h-[380px] md:h-[500px] 
                      bg-yellow-500/10 rounded-full blur-[90px] sm:blur-[110px] md:blur-[120px] 
                      pointer-events-none z-[1]" />
    </section>
  );
}