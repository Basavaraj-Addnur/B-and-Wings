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
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Strategic Execution",
    tag: "02",
    subtitle: "Mapping the roadmap",
    description: "Our team drafts a custom roadmap that blends high-end design with technical architecture. We define clear goals and unique value propositions tailored to your brand.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Agile Optimization",
    tag: "03",
    subtitle: "High-velocity building",
    description: "Through continuous collaboration, we build, test, and refine features. We ensure your digital experience is high-performing, scalable, and built to convert.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Reporting & Impact",
    tag: "04",
    subtitle: "Measuring the success",
    description: "We deliver measurable results through transparent reporting. By analyzing real-world data, we identify new opportunities to scale your brand effectively.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-white text-black selection:bg-yellow-100">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-22 pb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Sticky Content (Hero) */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-40 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-yellow-500" />
                  <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-[10px]">
                    The Growth Framework
                  </span>
                </div>
                {/* Reduced font size classes: text-4xl to text-6xl range */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
                  THE <br /> 
                  <span className="text-yellow-500">METHOD</span> <br /> 
                  ENGINE
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                  A high-velocity process designed to transform your digital presence into a revenue-generating machine.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Stacking Cards */}
          <div className="lg:w-3/5 space-y-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="lg:sticky lg:top-32"
                style={{ paddingTop: `${index * 24}px` }} 
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_20px_50px_-20px_rgba(234,179,8,0.15)] relative overflow-hidden"
                >
                  {/* Phase Background Number */}
                  <div className="absolute -bottom-6 -right-4 text-[12rem] font-black text-gray-50 select-none leading-none group-hover:text-yellow-50 transition-colors duration-500">
                    {step.tag}
                  </div>

                  {/* Top Header: Icon on Right */}
                  <div className="flex justify-between items-start relative z-10 mb-12">
                    <div>
                      <span className="text-yellow-500 font-mono text-sm font-bold tracking-widest uppercase block mb-2">
                        Phase {step.tag}
                      </span>
                      <div className="w-8 h-1 bg-yellow-400 rounded-full" />
                    </div>
                    
                    {/* Icon Box: Top Right */}
                    <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:bg-yellow-500 group-hover:text-black">
                      {step.icon}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 uppercase leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                      {step.description}
                    </p>
                    
                    {/* Architectural Footer Line */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-[1px] bg-gray-100 relative overflow-hidden">
                        <motion.div 
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="absolute inset-0 bg-yellow-500"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-300">
                        {step.subtitle}
                      </span>
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