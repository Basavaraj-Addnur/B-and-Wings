"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollFloat from "@/Animations/ScrollFloat";
import { useState, useEffect } from "react";

export default function CTA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensures the DOM and ScrollTrigger are synced correctly
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-black text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Headline Scroll Effect */}
        <div className="mb-6">
          {isMounted && (
            <ScrollFloat
              animationDuration={1}
              ease='back.out(2)'
              scrollStart='top 90%'
              scrollEnd='top 40%'
              stagger={0.04}
              textClassName="text-4xl md:text-5xl font-bold text-white"
            >
              Ready to Scale Your Brand?
            </ScrollFloat>
          )}
        </div>

        {/* Description Scroll Effect */}
        <div className="mb-10 max-w-2xl mx-auto">
          {isMounted && (
            <ScrollFloat
              animationDuration={0.8}
              stagger={0.01}
              scrollStart="top 92%"
              scrollEnd="bottom 30%"
              textClassName="text-gray-300 text-lg leading-relaxed"
            >
              Let’s build a high-converting digital system tailored for your business.
            </ScrollFloat>
          )}
        </div>

        {/* Button with Character Animation */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-full font-bold hover:scale-105 hover:bg-yellow-400 transition-all shadow-xl active:scale-95 text-sm overflow-hidden"
          >
            {isMounted && (
              <ScrollFloat
                stagger={0.04}
                scrollStart="top 95%"
                scrollEnd="bottom 60%"
                textClassName="text-black"
              >
                Start Your Project
              </ScrollFloat>
            )}
          </Link>
        </div>

      </div>

      {/* Subtle Background Detail (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}