"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Rocket,
  Zap,
  Target,
  BarChart3,
  ChevronRight,
  Users2
} from "lucide-react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
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
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-orange-100/40 blur-[100px] rounded-full" />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
              
              <div className="flex items-center gap-3 text-yellow-600 font-bold text-[11px] uppercase tracking-[0.4em]">
                <div className="w-10 h-[1px] bg-yellow-400" />
                <span>About Band Wings</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
                We Build <span className="text-yellow-500 italic font-serif">Growth Engines</span><br />
                for Modern Brands.
              </h1>

              <p className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed">
                Band Wings is a performance-driven digital marketing and IT services company.
                We design, engineer, and scale digital ecosystems that generate measurable growth.
                From brand strategy to technical architecture — we align creativity, data, and
                execution into one unified growth system.
              </p>

              <div className="grid grid-cols-4 gap-6 pt-6 border-t border-slate-200/60">
                {[
                  { label: "Revenue Generated", val: "10M+" },
                  { label: "Global Clients", val: "25+" },
                  { label: "Avg ROI Growth", val: "3X" },
                  { label: "Experts", val: "20+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-slate-900 leading-none">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center"
            >
              <img
                src="/about.png"
                alt="Band Wings Growth Visual"
                className="w-full max-w-lg drop-shadow-2xl z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={fadeUp}
              className="md:col-span-8 p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm"
            >
              <h2 className="text-[11px] font-bold text-yellow-600 uppercase tracking-widest mb-4">
                Our Mission
              </h2>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">
                Transforming Businesses Through Digital Precision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-xl">
                Our mission is to empower ambitious brands with data-backed marketing
                and robust technology solutions. We eliminate guesswork and replace it
                with strategy, automation, and measurable performance — ensuring every
                campaign, platform, and product drives scalable results.
              </p>
            </motion.div>

            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              variants={fadeUp}
              className="md:col-span-4 p-10 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl"
            >
              <Users2 size={30} className="text-black mb-6" />
              <h3 className="text-xl font-bold mb-3 text-black">
                Our Team
              </h3>
              <p className="text-sm text-black/80 leading-relaxed">
                A collective of strategists, developers, media buyers,
                designers, and analysts working together to build
                high-performance digital systems.
              </p>
            </motion.div>

            {[
              {
                icon: <BarChart3 size={18} />,
                title: "Performance First",
                desc: "Every strategy we deploy is backed by analytics, conversion tracking, and ROI optimization."
              },
              {
                icon: <Target size={18} />,
                title: "Strategic Clarity",
                desc: "Clear communication, defined KPIs, transparent reporting — no hidden processes."
              },
              {
                icon: <Zap size={18} />,
                title: "Execution Speed",
                desc: "We move fast, test aggressively, and iterate intelligently to outperform competition."
              }
            ].map((val, i) => (
              <motion.div
                key={i}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                variants={fadeUp}
                className="md:col-span-4 p-8 rounded-[2rem] border border-slate-100 bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    {val.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Our <span className="text-yellow-500">Growth Framework</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Audit & Discovery",
                desc: "We analyze your brand, competitors, funnels, and technical stack to uncover growth opportunities."
              },
              {
                step: "02",
                title: "Strategy & Execution",
                desc: "We design high-impact campaigns and build optimized digital infrastructure aligned with business goals."
              },
              {
                step: "03",
                title: "Scale & Optimize",
                desc: "Through continuous tracking and optimization, we maximize ROI and unlock scalable performance."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="text-yellow-500 font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}