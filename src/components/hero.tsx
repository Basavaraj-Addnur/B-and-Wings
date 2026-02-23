"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import TextCursor from "@/components/TextCursor";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const hasTriggeredRef = useRef(false);
  const router = useRouter();

  // Updated timing as requested (7 seconds)
  const REDUCED_DURATION = 7000;

  useEffect(() => {
    setIsMounted(true);
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
      className={`relative flex items-center justify-center px-6 overflow-hidden bg-gradient-to-tr from-white via-yellow-50/20 to-white transition-all duration-700 ${
        isVideoActive ? "pt-32" : "pt-0"
      }`}
      style={{ height: "calc(90vh - 5px)" }}
    >
      <TextCursor />

      {/* ================= PREMIUM GLOW BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-yellow-100/10 rounded-full blur-[150px]" />

        <motion.div
          animate={{ x: [-200, 800] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[-200px] w-[300px] h-[2px] rotate-[-15deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FFD700, #FFF, #FFD700, transparent)",
            filter: "blur(1px)",
          }}
        />

        <motion.div
          animate={{ x: [-300, 900] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[60%] left-[-300px] w-[400px] h-[1.5px] rotate-[10deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FFCC00, #FFF, #FFCC00, transparent)",
            filter: "blur(1px)",
          }}
        />
      </div>

      {/* --- INTRO VIDEO LAYER --- */}
      <AnimatePresence mode="wait">
        {isVideoActive && (
          <motion.div
            key="hero-video-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-white"
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
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 h-full">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left relative z-40 lg:pb-20"
          >
            <motion.p
              variants={itemVariants}
              className="uppercase text-[9px] font-bold text-gray-400 mb-5 tracking-[0.3em]"
            >
              Performance Driven Digital Agency
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-black mb-6"
            >
              We Don’t Just Build Websites. <br />
              <span className="relative inline-block text-black">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  We Build Growth Engines.
                </span>
                <span className="absolute inset-0 bg-yellow-400/10 blur-xl opacity-30" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-medium"
            >
              From high-converting websites and mobile applications to
              performance marketing — we engineer measurable growth systems.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex justify-center items-center lg:-mt-10 z-20"
          >
            <div className="relative w-full aspect-square max-w-[550px]">
              <img
                src="/hero3.png"
                alt="Digital Growth Engine"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* --- BOTTOM RIGHT BLACK DESIGN (SWOOSH) --- */}
          <motion.div 
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
            className="absolute bottom-0 right-0 z-30 w-[450px] md:w-[650px] lg:w-[850px] h-[180px] md:h-[200px] pointer-events-none"
          >
            <div 
              className="absolute inset-0 bg-black pointer-events-auto" 
              style={{ 
                WebkitClipPath: "path('M850 180 L0 180 C 250 170, 450 90, 600 70 C 750 40, 800 15, 850 20 Z')" 
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute top-[30px] left-[160px] w-[350px] h-[2px] rotate-[-10deg] opacity-80"
                  style={{
                    background: "linear-gradient(90deg, transparent, #FFD700, #FFF, #FFD700, transparent)",
                    filter: "blur(0.5px)"
                  }}
                />
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[22px] left-[220px] w-4 h-4 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #FFF 0%, #FFCC00 40%, transparent 70%)",
                    filter: "blur(2px)",
                    boxShadow: "0 0 20px 5px rgba(255, 204, 0, 0.6)"
                  }}
                />
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-[50px] left-[350px] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#FFD700]" 
                />
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="absolute top-[35px] left-[170px] w-[250px] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rotate-[-12deg] blur-[3px] opacity-100" />

            {/* CTA Content */}
            <div className="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold tracking-tight mb-1">
                Let's Build Your Project
              </h3>
              <button
                onClick={() => router.push("/contact")}
                className="group relative flex items-center justify-center gap-3 
                bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 
                text-black px-4 py-2 rounded-full font-black text-lg
                transition-all duration-300 
                shadow-[0_20px_40px_rgba(255,180,0,0.35)] 
                hover:shadow-[0_25px_50px_rgba(255,140,0,0.45)]
                hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-yellow-300 to-orange-400 -z-10"></span>
                <span className="tracking-wide">Get Started</span>
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}