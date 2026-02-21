"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import CTA from "@/components/cta";

const steps = [
  {
    title: "Deep Discovery",
    tag: "01",
    subtitle: "Understanding your DNA",
    description: "We dive deep into your brand DNA, industry landscape, and audience pain points. By auditing your current positioning, we build a rock-solid foundation for growth.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Strategic Execution",
    tag: "02",
    subtitle: "Mapping the roadmap",
    description: "Our team drafts a custom roadmap that blends high-end design with technical architecture. We define clear goals and unique value propositions tailored to your brand.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Agile Optimization",
    tag: "03",
    subtitle: "High-velocity building",
    description: "Through continuous collaboration, we build, test, and refine features. We ensure your digital experience is high-performing, scalable, and built to convert.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Reporting & Impact",
    tag: "04",
    subtitle: "Measuring the success",
    description: "We deliver measurable results through transparent reporting. By analyzing real-world data, we identify new opportunities to scale your brand effectively.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-white text-black selection:bg-yellow-100">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Sticky Content (Hero) */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-40 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  The Growth Framework
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                  OUR <br /> 
                  <span className="text-yellow-500">4-STEP</span> <br /> 
                  ENGINE
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                  A high-velocity process designed to transform your digital presence into a revenue-generating machine.
                </p>
                
                {/* Visual Accent */}
                <div className="mt-12 hidden lg:block">
                    <div className="w-24 h-1 bg-yellow-500 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Stacking Cards */}
          <div className="lg:w-3/5 space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="lg:sticky lg:top-32"
                style={{ paddingTop: `${index * 20}px` }} // Slight offset for stacking effect
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
                    <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-yellow-500/20">
                      {step.icon}
                    </div>
                    <div className="text-6xl font-black text-gray-50 select-none leading-none">
                      {step.tag}
                    </div>
                  </div>

                  <div>
                    <div className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                      Phase {step.tag}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 uppercase">
                      {step.title}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                      {step.description}
                    </p>
                    
                    {/* Animated Progress Line */}
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full bg-yellow-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="relative z-20">
        <CTA />
        <Footer />
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}