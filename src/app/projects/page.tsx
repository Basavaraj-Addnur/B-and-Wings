"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";
import CTA from "@/components/cta";

const projects = [
  {
    title: "Columate",
    subtitle: "Infrastructure Digitalization",
    category: "Web Development",
    image: "/constuct.webp",
    link: "https://columate.com/",
  },
  {
    title: "Gurukula",
    subtitle: "EdTech Revolution",
    category: "Learning Portal",
    image: "/Gurukula.webp",
    link: "https://mastergurukula.com/",
  },
  {
    title: "Flash News",
    subtitle: "SEO-First Journalism",
    category: "Media & News",
    image: "/Flash.webp",
    link: "https://kannadaflashnews.com/",
  },
  {
    title: "Suvarnagiri",
    subtitle: "Digital Journalism",
    category: "News Portal",
    image: "/Suvarnagiri.webp",
    link: "https://suvarnatimesofkarnataka.com/latestarticles.php",
  },
  {
    title: "Spacedizin",
    subtitle: "Luxury Interiors",
    category: "UX/UI Design",
    image: "/Bhim.webp",
    link: "https://spacedizin.com",
  },
  {
    title: "Enclevia",
    subtitle: "Modern Scaling",
    category: "EdTech Strategy",
    image: "/LMS.webp",
    link: "https://enclevia.com",
  },
];

export default function ProjectsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const springX = useSpring(x, { stiffness: 80, damping: 25 });

  return (
    /* Updated background color to match the screenshots (off-white/cream) */
    <main className="bg-[#fafaf5] text-black selection:bg-yellow-200 min-h-screen">
      <Navbar />

      {/* Refined Hero Intro with Radial Gradient overlay */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle gradient glow to match About/Services feel */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
             style={{ background: "radial-gradient(circle at 50% 50%, #fff9e6 0%, transparent 70%)" }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Side: Animated Badge */}
            <motion.div 
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              className="hidden lg:flex flex-col items-center gap-2"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border border-gray-200 rounded-full flex items-center justify-center relative"
              >
                <Sparkles className="text-yellow-500" size={24} />
                <span className="absolute inset-0 text-[10px] uppercase font-bold p-2 text-center flex items-center justify-center italic">
                  • Creative • Digital • Studio
                </span>
              </motion.div>
            </motion.div>

            {/* Center: Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 block">
                Case Studies
              </span>
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                <span className="text-black">Port</span>
                <span className="text-yellow-500">folio</span>
              </h1>
            </motion.div>

            {/* Right Side: Simple Ticker/Text */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="max-w-[200px] text-right hidden lg:block"
            >
              <p className="text-xs font-medium uppercase leading-relaxed text-gray-500">
                Crafting immersive digital experiences for forward-thinking brands across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section - Background set to transparent to show main BG */}
      <section ref={targetRef} className="relative h-[450vh] bg-transparent">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: springX }} className="flex gap-12 px-10">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
      
      <CTA/>
      <Footer />
    </main>
  );
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <div className="group relative w-[85vw] md:w-[45vw] flex-shrink-0">
      {/* Index and Category Row */}
      <div className="flex justify-between items-end mb-6">
        <span className="text-6xl font-black text-gray-200/50">0{index + 1}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50/50 backdrop-blur-sm px-3 py-1 rounded">
          {project.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-xl shadow-sm bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Link Hover State (Clean) */}
        <a 
          href={project.link}
          target="_blank"
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]"
        >
          <div className="bg-white text-black p-6 rounded-full shadow-xl">
            <Globe size={30} />
          </div>
        </a>
      </div>

      {/* Details Section */}
      <div className="mt-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter">
          {project.title}
        </h3>
        <p className="text-gray-500 font-medium mt-2 max-w-md">
          {project.subtitle}
        </p>
        
        {/* Animated accent line */}
        <div className="h-[2px] w-full bg-gray-200 mt-6 overflow-hidden">
          <div className="h-full w-0 bg-yellow-400 group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
      </div>
    </div>
  );
};