"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Home } from "lucide-react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer/footer";

export default function NotFound() {
  return (
    <main className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-yellow-500 selection:text-black">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center px-6 relative overflow-hidden pt-24 pb-12">
        {/* Dark Grid Background matching your screenshot texture */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
               backgroundSize: '40px 40px' 
             }} 
        />

        <div className="max-w-4xl w-full text-center relative z-10">
          
          {/* Main 404 Glitch Block - Reduced sizes for better fit */}
          <div className="relative mb-4 flex flex-col items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter uppercase glitch-heavy"
            >
              404
            </motion.h1>
            
            {/* "NOT FOUND" Refined Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="md:-mt-10 z-20"
            >
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-widest text-white glitch-sub">
                NOT FOUND
              </h2>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-4">
              <span className="text-yellow-500">ERROR_CODE:</span> PAGE_MISSING
            </h3>
            <p className="text-gray-400 font-medium text-sm md:text-base max-w-lg mx-auto mb-10 uppercase leading-relaxed tracking-wide">
              The requested URL was not found on this server. <br className="hidden md:block" />
              It might have been moved or deleted permanently.
            </p>

            {/* Brutalist Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-none font-black uppercase text-xs tracking-[0.2em] transition-all border-2 border-yellow-500"
                >
                  <Home size={16} />
                  Return Home
                </motion.div>
              </Link>

              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-none font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                <MoveLeft size={16} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>

        {/* Optimized Glitch Styles */}
        <style jsx global>{`
          .glitch-heavy {
            position: relative;
            color: white;
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
            animation: glitch-anim 600ms infinite;
          }

          .glitch-sub {
             color: white;
             text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9;
             animation: glitch-vibrate 2.5s infinite;
          }

          @keyframes glitch-anim {
            0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
            14% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
            15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; transform: translate(-2px, 1px); }
            49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
            50% { text-shadow: 0.03em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00; transform: translate(2px, -1px); }
            99% { text-shadow: 0.03em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00; }
            100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff, -0.025em -0.05em 0 #fffc00; }
          }

          @keyframes glitch-vibrate {
            0% { transform: translate(0); }
            1% { transform: translate(-2px, 1px); }
            2% { transform: translate(2px, -1px); }
            3% { transform: translate(0); }
            100% { transform: translate(0); }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}