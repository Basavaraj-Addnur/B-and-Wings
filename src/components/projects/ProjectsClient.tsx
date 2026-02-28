"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionTemplate } from "framer-motion";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import { Globe, Linkedin, Mail, Instagram, MessageCircle, Briefcase } from "lucide-react";
import CTA from "@/components/cta";

const projects = [
  {
    title: "Bangalore Fashion Trainings",
    subtitle: "Modern Design for a Modern Audience",
    category: "Fashion Training Institute",
    image: "/bangalorefashion.png",
    link: "https://bangalorefashiontrainings.com/",
  },
  {
    title: "Mera Accountant",
    subtitle: "Modern Scaling",
    category: "GST & Income tax Services",
    image: "/MeraAccount.png",
    link: "https://meraaccountant.co.in/",
  },
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
  
];

const menuIcons = [
  { 
    icon: <Instagram size={18} />, 
    link: "https://www.instagram.com/bandwingsofficial/", 
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white" 
  },
  { 
    icon: <Linkedin size={18} />, 
    link: "https://www.linkedin.com/company/b-and-wings/", 
    color: "bg-[#0077b5] text-white" 
  },
  { 
    icon: <MessageCircle size={18} />, 
    link: "https://wa.me/918792496446?text=Hello%20B%20and%20Wings%2C%20I%20would%20like%20to%20discuss%20a%20project.", 
    color: "bg-[#25D366] text-white" 
  },
  { 
    icon: <Mail size={18} />, 
    link: "mailto:connect@bandwings.com", 
    color: "bg-[#EA4335] text-white" 
  },
];

export default function ProjectsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 1. Map progress as a pure number using useSpring to avoid unit conflicts
  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // 2. Map the spring values to percentages and vw values separately
  const xPercent = useTransform(springProgress, [0, 1], [0, -100]);
  const xVW = useTransform(springProgress, [0, 1], [0, 100]);
  
  // 3. Combine them safely. This completely fixes the Framer Motion "mixed units" calculation bug
  const xTransform = useMotionTemplate`calc(${xPercent}% + ${xVW}vw)`;

  return (
    <main className="bg-[#fafaf5] text-black selection:bg-yellow-200 min-h-screen">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
             style={{ background: "radial-gradient(circle at 50% 50%, #fff9e6 0%, transparent 70%)" }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Replaced Interactive Plus Icon with Rotating Text & Center Icon */}
            <div className="hidden lg:flex items-center justify-center w-32 h-32 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="circleTextPath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-black uppercase tracking-[0.15em] fill-gray-500">
                    <textPath href="#circleTextPath" startOffset="0%" textLength="220" lengthAdjust="spacing">
                      Our Projects • Our Projects • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="relative z-10 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                <Briefcase size={22} className="text-yellow-600" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-2 block">
                Case Studies
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                <span className="text-black">Port</span>
                <span className="text-yellow-500">folio</span>
              </h1>
            </motion.div>

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

      {/* Added bg-[#fafaf5] so the CTA section beneath it stops bleeding through */}
      <section ref={targetRef} className="relative h-auto lg:h-[300vh] bg-[#fafaf5]">
        <div className="static lg:sticky lg:top-0 flex flex-col lg:flex-row h-auto lg:h-screen lg:items-center overflow-visible lg:overflow-hidden">
          <motion.div 
            style={{ x: isDesktop ? xTransform : "0%" }} 
            // FIXED: Added w-max! This forces the container to be the total width of all cards combined, rather than stopping at the screen edge.
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 px-6 md:px-10 py-10 lg:py-0 w-max"
          >
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
    <div className="group relative w-full lg:w-[45vw] flex-shrink-0">
      <div className="flex justify-between items-end mb-4 md:mb-6">
        <span className="text-5xl md:text-6xl font-black text-gray-200/50">0{index + 1}</span>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50/50 backdrop-blur-sm px-3 py-1 rounded">
          {project.category}
        </span>
      </div>

      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl shadow-sm bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        <a 
          href={project.link}
          target="_blank"
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]"
        >
          <div className="bg-white text-black p-4 md:p-6 rounded-full shadow-xl">
            <Globe size={24} className="md:w-[30px] md:h-[30px]" />
          </div>
        </a>
      </div>

      <div className="mt-6 md:mt-8">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base font-medium mt-2 max-w-md">
          {project.subtitle}
        </p>
        
        <div className="h-[2px] w-full bg-gray-200 mt-4 md:mt-6 overflow-hidden">
          <div className="h-full w-0 bg-yellow-400 group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
        
        <div className="mt-4 lg:hidden">
            <a href={project.link} target="_blank" className="text-xs font-black uppercase tracking-widest text-yellow-600 flex items-center gap-2">
                Visit Website <Globe size={14} />
            </a>
        </div>
      </div>
    </div>
  );
};