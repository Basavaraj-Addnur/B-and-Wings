"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  BarChart3
} from "lucide-react";
import CTA from "@/components/cta";

const steps = [
  {
    title: "Deep Discovery",
    tag: "Phase 01",
    description: "We dive deep into your brand DNA, industry landscape, and audience pain points. By auditing your current positioning, we build a rock-solid foundation for growth.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Strategic Execution",
    tag: "Phase 02",
    description: "Our team drafts a custom roadmap that blends high-end design with technical architecture. We define clear goals and unique value propositions tailored to your brand.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Agile Optimization",
    description: "Through continuous collaboration, we build, test, and refine features. We ensure your digital experience is high-performing, scalable, and built to convert.",
    tag: "Phase 03",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Reporting & Impact",
    tag: "Phase 04",
    description: "We deliver measurable results through transparent reporting. By analyzing real-world data, we identify new opportunities to scale your brand effectively.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

export default function ProcessPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Dynamic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Process Section - Starts immediately after Navbar */}
      <section className="px-6 pt-32 pb-28 md:pt-40">
        <div className="max-w-6xl mx-auto relative">
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:mb-44 last:mb-0">
              
              {/* Left Side: Sticky Icon & Phase */}
              <div className="md:w-1/4 md:sticky md:top-36 h-fit z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-yellow-500 font-black text-lg mb-2 uppercase tracking-widest">
                    {step.tag}
                  </div>
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center text-white shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    {step.icon}
                  </div>
                  {/* Decorative Background Number */}
                  <div className="text-[9rem] font-black text-gray-100 absolute -left-8 -top-14 -z-10 select-none opacity-60">
                    0{index + 1}
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Content Card */}
              <div className="md:w-3/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-7 md:p-12 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                    {step.description}
                  </p>
                  
                  {/* Animated Progress Line */}
                  <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-yellow-500"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          ))}

        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}