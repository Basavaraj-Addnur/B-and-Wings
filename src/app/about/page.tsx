"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { 
  Rocket, Zap, Target, BarChart3, ChevronRight, Users2 
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#F9F7F2] selection:bg-yellow-200 overflow-x-hidden">
      {/* Cinematic Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-orange-100/40 blur-[100px] rounded-full" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-[100]" style={{ scaleX }} />
      <Navbar />

      <main className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-8 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 text-yellow-600 font-bold text-[10px] uppercase tracking-[0.4em]">
                <div className="w-10 h-[1px] bg-yellow-400" />
                <span>About B & Wings</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[0.95]">
                Engineering <span className="text-yellow-500 italic font-serif">Digital Wings</span> <br />
                for Global Brands.
              </h1>
              
              <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                We are a boutique growth agency. We bridge the gap between high-end 
                design and technical architecture to build industry-leading ecosystems.
              </p>

              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-200/60">
                {[
                  { label: "Revenue", val: "10M+" },
                  { label: "Partners", val: "15+" },
                  { label: "Avg Growth", val: "2.5x" },
                  { label: "Specialists", val: "10+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-lg font-bold text-slate-900 italic leading-none">{stat.val}</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center"
            >
              <img 
                src="/about.png" 
                alt="B&Wings Visual" 
                className="w-full max-w-lg drop-shadow-2xl z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* --- BENTO GRID --- */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <motion.div 
                whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
                className="md:col-span-8 p-10 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-md shadow-sm group relative overflow-hidden"
              >
                <h2 className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-4">The Viision</h2>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-lg">
                  We turn complex tech into competitive advantages. We build <span className="text-slate-900 font-semibold underline decoration-yellow-400">digital wings</span>—infrastructure 
                  and strategy that allow brands to rise above the market.
                </p>
                <button className="mt-8 flex items-center gap-2 text-[10px] font-black group-hover:gap-4 transition-all tracking-widest">
                  VIEW MANIFESTO <ChevronRight size={14} className="text-yellow-500" />
                </button>
              </motion.div>

              <motion.div 
                whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
                className="md:col-span-4 p-10 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-yellow-500 flex flex-col justify-between shadow-xl shadow-yellow-500/10"
              >
                <Users2 size={28} className="text-black/80" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">The Collective</h3>
                  <p className="text-xs font-medium text-black/70 leading-relaxed">
                    A synergy of brilliant growth hackers and architects working together as one.
                  </p>
                </div>
              </motion.div>

              {[
                { icon: <BarChart3 size={18} />, title: "Data Driven", desc: "We prioritize measurable ROI over vanity metrics, ensuring every move fuels growth." },
                { icon: <Target size={18} />, title: "Radical Clarity", desc: "Transparent workflows and honest communication. No black boxes, just clear results." },
                { icon: <Zap size={18} />, title: "High Velocity", desc: "In a digital-first world, speed is the ultimate edge. We deploy and iterate at pace." }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
                  className="md:col-span-4 p-8 rounded-[2rem] border border-slate-100 bg-white hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 shrink-0 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                      {val.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">{val.title}</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- METHODOLOGY --- */}
        <section className="py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                Why Choose <span className="text-yellow-500">Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full">
              {[
                { t: "Deep Audit", d: "A forensic analysis of your current stack to locate friction points and hidden bottlenecks.", icon: "01" },
                { t: "The Blueprint", d: "A bespoke technical roadmap, custom engineering every component for infinite growth.", icon: "02" },
                { t: "Optimization", d: "Using real-time telemetry to continuously sharpen your ecosystem for efficiency.", icon: "03" }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-900 text-yellow-500 flex items-center justify-center font-black text-lg group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {step.t}
                    </h4>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}