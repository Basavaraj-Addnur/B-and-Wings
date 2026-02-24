"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import ScrollFloat from "@/Animations/ScrollFloat";
import { useState, useEffect, useRef } from "react";
// Added MoveRight to the import list below
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  BarChart3, 
  MoveRight 
} from "lucide-react";

const steps = [
  {
    title: "Deep Discovery",
    description: "We dive into your brand DNA, industry landscape, and audience pain points to build a foundation.",
    icon: <Search className="w-6 h-6" />,
    path: "M 155 200 L 335 40", 
  },
  {
    title: "Strategic Execution",
    description: "Our team drafts a custom roadmap, blending design with technical architecture tailored to your goals.",
    icon: <Lightbulb className="w-6 h-6" />,
    path: "M 415 40 L 585 200", 
  },
  {
    title: "Agile Optimization",
    description: "Through continuous collaboration, we build, test, and refine features to ensure peak performance.",
    icon: <Rocket className="w-6 h-6" />,
    path: "M 665 200 L 845 40", 
  },
  {
    title: "Reporting & Impact",
    description: "We deliver measurable results with transparent reporting, scaling your brand based on real data.",
    icon: <BarChart3 className="w-6 h-6" />,
    path: null, 
  },
];

export default function Process() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 20%"], 
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Reduced section bottom padding from pb-24 to pb-8
  return (
    <section ref={containerRef} className="pt-5 pb-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          {isMounted && (
            <ScrollFloat
              animationDuration={1}
              ease="back.out(2)"
              scrollStart="top 90%"
              scrollEnd="top 70%"
              stagger={0.04}
              containerClassName="mb-4"
              textClassName="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tighter"
            >
              How We Work
            </ScrollFloat>
          )}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center"
          >
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-1">
              IN 4 BOLD STEPS
            </span>
          </motion.div>
        </div>

        {/* Zig-Zag Section */}
        <div className="relative min-h-[400px] mt-10">
          
          {/* THE ZIG-ZAG LINES (Desktop Only) */}
          <svg 
            className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 400" 
            preserveAspectRatio="none"
          >
            {steps.map((step, index) => {
              if (!step.path) return null;

              const start = (index * 0.25) + 0.1;
              const end = (index * 0.25) + 0.25;

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const pathLength = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <g key={`path-${index}`}>
                  <path 
                    d={step.path} 
                    fill="none" 
                    stroke="#F3F4F6" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  <motion.path 
                    d={step.path} 
                    fill="none" 
                    stroke="#FACC15" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    style={{ pathLength }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const triggerPoint = index * 0.25;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [triggerPoint, triggerPoint + 0.1], [0, 1]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [triggerPoint, triggerPoint + 0.1], [40, 0]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className={`flex flex-col items-center text-center ${
                    index % 2 === 0 ? "md:mt-40" : "md:mt-0"
                  }`}
                >
                  {/* Diamond Shape Wrapper */}
                  <div className="relative mb-8 group">
                    <div className="w-20 h-20 bg-black rotate-45 flex items-center justify-center shadow-2xl group-hover:bg-yellow-400 transition-all duration-500 border-4 border-white">
                      <div className="-rotate-45 text-white group-hover:text-black transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-sm shadow-lg border-2 border-white">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="px-4 max-w-[250px]">
                    <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Reduced margin-top from mt-32 to mt-12 */}
        <div className="text-center mt-12">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]) }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FACC15] via-[#FACC15] to-[#FB923C] text-black px-5 py-2.5 rounded-full font-black text-2xl transition-all hover:brightness-105 active:scale-95 shadow-xl group"
            >
              <span className="tracking-tight">Get Started</span>
              <MoveRight 
                className="w-8 h-8 transition-transform group-hover:translate-x-2" 
                strokeWidth={3} 
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}