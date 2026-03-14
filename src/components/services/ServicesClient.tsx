"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer/footer";
import CTA from "@/components/cta";

const serviceCategories = [
  {
    title: "Software Engineering",
    image: "/GIF/1.gif",
    desc: "Custom enterprise solutions designed for massive scale and cloud-native SaaS.",
    features: ["Enterprise SaaS", "API-First", "Cloud-Native"],
    accent: "text-blue-600"
  },
  {
    title: "Web Development",
    image: "/GIF/2.gif",
    desc: "High-performance, responsive websites built with Next.js and SEO in mind.",
    features: ["Next.js / React", "Headless CMS", "Performance"],
    accent: "text-orange-600"
  },
  {
    title: "IT & Infrastructure",
    image: "/GIF/3.gif",
    desc: "Secure backend management, DevOps pipelines, and 24/7 system monitoring.",
    features: ["Cloud (AWS/GCP)", "DevOps", "Cybersecurity"],
    accent: "text-slate-600"
  },
  {
    title: "Digital Marketing",
    image: "/GIF/4.gif",
    desc: "Data-driven marketing ecosystems designed to fuel your sales engine.",
    features: ["Email Automation", "Brand Strategy", "Analytics"],
    accent: "text-amber-600"
  },
  {
    title: "Influencer Marketing",
    image: "/GIF/5.gif",
    desc: "Connecting brands with trusted voices to drive authentic conversions.",
    features: ["Sourcing", "Strategy", "Tracking"],
    accent: "text-indigo-600"
  },
  {
    title: "Social Media",
    image: "/GIF/6.gif", 
    desc: "Strategic content and design to build a powerful online community.",
    features: ["Content Strategy", "Post Design", "Management"],
    accent: "text-yellow-600"
  },
  {
    title: "UI/UX Design",
    image: "/GIF/7.gif",
    desc: "Psychology-driven interfaces that are intuitive and strictly functional.",
    features: ["User Research", "Prototyping", "Design Systems"],
    accent: "text-purple-600"
  },
  {
    title: "Performance Marketing",
    image: "/GIF/8.gif",
    desc: "ROI-obsessed paid media campaigns with rigorous optimization.",
    features: ["PPC Management", "Paid Social", "CRO"],
    accent: "text-emerald-600"
  },
  {
    title: "Maintenance",
    image: "/GIF/9.gif", 
    desc: "Continuous monitoring, security patches, and speed optimizations.",
    features: ["Uptime", "Security", "Backups"],
    accent: "text-rose-600"
  },
];

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 3 >= serviceCategories.length ? 0 : prev + 3));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, serviceCategories.length - 3) : prev - 3));
  };

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-100 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-[100]" style={{ scaleX }} />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-yellow-600 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} />
              <span>Innovation</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              Simple Solutions for <br></br><span className="text-yellow-500">Complex Growth.</span> 
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-medium">
              Full-stack expertise to help your brand scale from initial code to market dominance.
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Header and Navigation Row */}
            <div className="flex items-end justify-between mb-8 px-3">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Expertise Services</h2>
                <div className="h-1 w-12 bg-yellow-500 mt-2 rounded-full" />
              </div>
              
              <div className="flex gap-2">
                <button onClick={prevSlide} className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div 
                animate={{ x: `-${(currentIndex / serviceCategories.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="flex"
                style={{ width: `${(serviceCategories.length / 3) * 100}%` }}
              >
                {serviceCategories.map((service, idx) => (
                  <div key={idx} className="px-3 w-full">
                    <div className="bg-white border border-neutral-100 rounded-2xl p-7 transition-all hover:border-neutral-200">
                      {/* Image container with no background color */}
                      <div className="relative h-32 w-full mb-6 overflow-hidden">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          unoptimized 
                          className="object-contain"
                        />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-neutral-900 tracking-tight">{service.title}</h3>
                      <p className="text-sm text-neutral-500 mb-6 line-clamp-2 leading-relaxed">{service.desc}</p>
                      
                      <div className="space-y-2.5 border-t border-neutral-50 pt-5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                            <CheckCircle2 size={12} className={`mr-2.5 ${service.accent} opacity-80`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {[0, 3, 6].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentIndex(dot)}
                  className={`h-1 transition-all duration-300 rounded-full ${currentIndex === dot ? "w-8 bg-yellow-500" : "w-2 bg-neutral-200"}`}
                />
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