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
    <section className="py-24 bg-black text-white text-center relative overflow-hidden min-h-[400px] flex items-center justify-center">
      
      {/* Background Dot Grid - Static with Color Hover Effect */}
      <DotGrid 
        dotSize={3}
        gap={28}
        baseColor="#1a1a2e" 
        activeColor="#7042ff" 
        proximity={180}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 pointer-events-none">

        {/* Headline Scroll Effect */}
        <div className="mb-6 pointer-events-auto">
          {isMounted && (
            <ScrollFloat
              animationDuration={1}
              ease='back.out(2)'
              // ADJUSTED: Starts earlier and ends quickly so text looks normal
              scrollStart='top 100%' 
              scrollEnd='top 50%'
              stagger={0.04}
              textClassName="text-4xl md:text-5xl font-bold text-white"
            >
              Ready to Scale Your Brand?
            </ScrollFloat>
          )}
        </div>

        {/* Description Scroll Effect */}
        <div className="mb-10 max-w-2xl mx-auto pointer-events-auto">
          {isMounted && (
            <ScrollFloat
              animationDuration={0.8}
              stagger={0.01}
              // ADJUSTED: Tightened range
              scrollStart="top 95%"
              scrollEnd="top 60%"
              textClassName="text-gray-300 text-lg leading-relaxed"
            >
              Let’s build a high-converting digital system tailored for your business.
            </ScrollFloat>
          )}
        </div>

        {/* Button with Character Animation */}
        <div className="flex justify-center pointer-events-auto">
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-400 transition-all shadow-xl active:scale-95 text-sm overflow-hidden"
          >
            {isMounted && (
              <ScrollFloat
                stagger={0.04}
                // ADJUSTED: Higher start point so it finishes before you even see it clearly
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

      {/* Subtle Background Detail (Radial Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-[1]" />
    </section>
  );
}