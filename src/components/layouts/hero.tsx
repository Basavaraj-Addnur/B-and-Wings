"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import TextCursor from "@/components/TextCursor";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const hasTriggeredRef = useRef(false);
  const router = useRouter();

  // 7 Seconds timing
  const REDUCED_DURATION = 7000;

  useEffect(() => {
    setIsMounted(true);

    // If mobile, instantly show content and skip the video timer
    if (window.innerWidth < 768) {
      handleTransition();
      return; 
    }

    // Otherwise, run the video timer for desktop
    const timer = setTimeout(() => {
      handleTransition();
    }, REDUCED_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const handleTransition = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsVideoActive(false);
    setShowContent(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!isMounted) return null;

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-tr from-white via-yellow-50/20 to-white transition-all duration-700 ${
        isVideoActive ? "pt-32" : "pt-0"
      }`}
      style={{ height: "calc(87vh - 5px)" }}
    >
      <TextCursor />

      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-yellow-100/10 rounded-full blur-[150px]" />
      </div>

      {/* --- INTRO VIDEO LAYER --- */}
      <AnimatePresence mode="wait">
        {isVideoActive && (
          <motion.div
            key="hero-video-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            // Added hidden md:flex here to ensure it never renders on mobile screens visually
            className="absolute inset-0 z-50 hidden md:flex items-center justify-center bg-white"
          >
            <video
              autoPlay
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="w-full h-full object-contain md:object-cover pointer-events-none"
              onEnded={handleTransition}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTENT LAYER --- */}
      {showContent && (
        <div className="w-full h-full relative z-10 pt-2">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-6">
            {/* LEFT SIDE */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left flex flex-col items-center md:items-start relative z-40 lg:pb-32 -mt-40 md:mt-0 w-full"
            >
              <motion.p
                variants={itemVariants}
                // CHANGED: tracking-widest for mobile (less space), tracking-[0.3em] for desktop. Added flex-wrap for safety.
                className="uppercase text-[11px] font-bold text-gray-900 md:pt-10 mb-3 md:mb-5 tracking-widest md:tracking-[0.3em] flex flex-wrap items-center justify-center md:justify-start gap-2 w-full max-w-[300px] md:max-w-none mx-auto md:mx-0 text-center md:text-left"
              >
                <FaHeart className="text-red-900 shrink-0" />
                <span>#1 Popular Digital Tech Partner</span>
              </motion.p>

              {/* --- NEW STATS BOXES (MOBILE ONLY - ABOVE MAIN CONTENT) --- */}
              <motion.div
                variants={itemVariants}
                className="flex md:hidden gap-3 mb-4 w-full"
              >
                {/* Box 1 */}
<div className="flex-1 bg-white backdrop-blur-md border border-yellow-300/60 rounded-2xl p-3 shadow-[0_8px_20px_rgba(251,191,36,0.12)] hover:shadow-[0_8px_25px_rgba(251,191,36,0.25)] hover:-translate-y-0.5 hover:border-yellow-400/80 transition-all duration-300 ease-out text-center group relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <h4 className="relative z-10 text-2xl font-black bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
    100+
  </h4>
  <p className="relative z-10 text-[10px] uppercase font-extrabold text-slate-500 mt-1.5 tracking-[0.2em] leading-tight">
    Happy<br />Clients
  </p>
</div>

{/* Box 2 */}
<div className="flex-1 bg-white backdrop-blur-md border border-yellow-300/60 rounded-2xl p-3 shadow-[0_8px_20px_rgba(251,191,36,0.12)] hover:shadow-[0_8px_25px_rgba(251,191,36,0.25)] hover:-translate-y-0.5 hover:border-yellow-400/80 transition-all duration-300 ease-out text-center group relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <h4 className="relative z-10 text-2xl font-black bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
    10+
  </h4>
  <p className="relative z-10 text-[10px] uppercase font-extrabold text-slate-500 mt-1.5 tracking-[0.2em] leading-tight">
    Active<br />Projects
  </p>
</div>
                {/* Box 3 */}
                <div className="flex-1 bg-white backdrop-blur-md border border-yellow-300/60 rounded-2xl p-3 shadow-[0_8px_20px_rgba(251,191,36,0.12)] hover:shadow-[0_8px_25px_rgba(251,191,36,0.25)] hover:-translate-y-0.5 hover:border-yellow-400/80 transition-all duration-300 ease-out text-center group relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <h4 className="relative z-10 text-2xl font-black bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
    5+
  </h4>
  <p className="relative z-10 text-[10px] uppercase font-extrabold text-slate-500 mt-1.5 tracking-[0.2em] leading-tight">
    years<br />Expertise
  </p>
</div>
              </motion.div>
              {/* --- END STATS BOXES --- */}

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-black mb-3 md:mb-6"
              >
                We Don’t Build <br /><span className="relative z-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Websites
                  </span> <br />
                <span className="relative inline-block text-black">
  <span className="relative z-10">
    We Build <br />
    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
      Brands.
    </span>
  </span>
  <span className="absolute inset-0 bg-yellow-400/10 blur-xl opacity-30" />
</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-3 md:mt-6 text-base md:text-lg text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed font-medium"
              >
                From high-converting websites and mobile applications to
                performance marketing — we engineer measurable growth systems.
              </motion.p>

              {/* --- MOBILE-ONLY SERVICES CONTENT --- */}
              <motion.div
                variants={itemVariants}
                className="block md:hidden mt-4 w-full max-w-[320px] bg-yellow-50/50 backdrop-blur-sm p-4 rounded-xl border border-yellow-200/50"
              >
                <p className="text-sm text-gray-800 font-bold mb-2 text-center">
                  What we specialize in:
                </p>
                <div className="flex justify-center">
                  <ul className="text-sm text-gray-600 space-y-1.5 font-medium text-left inline-block">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span> High-Performance Web
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span> Mobile App Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span> ROI-Driven Marketing
                    </li>
                  </ul>
                </div>
              </motion.div>

            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:flex justify-center items-center lg:-mt-24 z-20"
            >
              <div className="relative w-full aspect-square max-w-[550px] transform scale-110">
                <img
                  src="/hero3.png"
                  alt="Digital Growth Engine"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* --- BOTTOM RIGHT BLACK DESIGN (SWOOSH / CTA) --- */}
          <motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
            className="absolute bottom-0 right-0 z-30 w-full md:w-[650px] lg:w-[850px] h-[140px] md:h-[220px] pointer-events-none"
          >
            {/* DESKTOP BACKGROUND (Hidden on Mobile) */}
            <div 
              className="hidden md:block absolute inset-0 bg-black pointer-events-auto" 
              style={{ 
                WebkitClipPath: "path('M850 220 L0 220 C 250 220, 450 120, 600 100 C 750 70, 810 35, 850 35 Z')" 
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute top-[40px] left-[160px] w-[350px] h-[2px] rotate-[-10deg] opacity-80"
                  style={{
                    background: "linear-gradient(90deg, transparent, #FFD700, #FFF, #FFD700, transparent)",
                    filter: "blur(0.5px)"
                  }}
                />
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[32px] left-[220px] w-4 h-4 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #FFF 0%, #FFCC00 40%, transparent 70%)",
                    filter: "blur(2px)",
                    boxShadow: "0 0 20px 5px rgba(255, 204, 0, 0.6)"
                  }}
                />
              </div>
            </div>

            {/* Glowing Accent Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[45px] left-[170px] w-[250px] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rotate-[-12deg] blur-[3px] opacity-100" />

            {/* MOBILE BACKGROUND (Hidden on Desktop) */}
            <div 
              className="block md:hidden absolute inset-0 bg-black pointer-events-auto"
              style={{
                borderTopLeftRadius: "60px",
              }}
            >
              {/* Mobile Glow Line */}
              <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[180px] h-[2px] opacity-80"
                  style={{
                    background: "linear-gradient(90deg, transparent, #FFD700, #FFF, #FFD700, transparent)",
                    filter: "blur(0.5px)"
                  }}
              />
            </div>

            {/* CTA Content */}
            <div className="absolute bottom-[20px] left-0 right-0 md:left-auto md:right-12 z-30 flex flex-col items-center gap-2 md:gap-3 pointer-events-auto">
              <h3 className="text-white text-base md:text-xl lg:text-2xl font-bold tracking-tight mb-0 md:mb-1">
                Let's Build Your Project
              </h3>
              <button
                onClick={() => router.push("/contact")}
                className="group relative flex items-center justify-center gap-3 
                bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 
                text-black px-6 py-2 rounded-full font-black text-base md:text-lg
                transition-all duration-300 
                shadow-[0_20px_40px_rgba(255,180,0,0.35)] 
                hover:shadow-[0_25px_50px_rgba(255,140,0,0.45)]
                hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-yellow-300 to-orange-400 -z-10"></span>
                <span className="tracking-wide">Get Started</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-2 md:w-[22px] md:h-[22px]"
                />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}