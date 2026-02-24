"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import { Globe, Plus, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle window check for side scroll logic
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Increased transform range to ensure all items scroll past
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const springX = useSpring(x, { stiffness: 80, damping: 25 });

  return (
    <main className="bg-[#fafaf5] text-black selection:bg-yellow-200 min-h-screen">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
             style={{ background: "radial-gradient(circle at 50% 50%, #fff9e6 0%, transparent 70%)" }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="hidden lg:flex items-center justify-center w-32 h-32 relative">
              <motion.div 
                className="relative z-20 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 135 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Plus size={24} className="text-yellow-600" />
                </motion.div>

                <AnimatePresence>
                  {isHovered && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-[-40px] bg-white/40 backdrop-blur-sm rounded-full -z-10 border border-gray-100/50 shadow-inner"
                      />
                      
                      {menuIcons.map((item, i) => {
                        const angle = (270 + (i * (360 / menuIcons.length))) * (Math.PI / 180);
                        const radius = 62; 
                        const xPos = Math.cos(angle) * radius;
                        const yPos = Math.sin(angle) * radius;

                        return (
                          <motion.a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            animate={{ opacity: 1, x: xPos, y: yPos, scale: 1 }}
                            exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            whileHover={{ scale: 1.15 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 350, 
                              damping: 20,
                              mass: 0.8
                            }}
                            className={`absolute w-10 h-10 border border-white/20 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 ${item.color} z-30`}
                          >
                            {item.icon}
                          </motion.a>
                        );
                      })}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
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

      <section ref={targetRef} className="relative h-auto lg:h-[500vh] bg-transparent">
        <div className="static lg:sticky lg:top-0 flex flex-col lg:flex-row h-auto lg:h-screen lg:items-center overflow-visible lg:overflow-hidden">
          <motion.div 
            style={{ x: isDesktop ? springX : 0 }} 
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 px-6 md:px-10 py-10 lg:py-0"
          >
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} index={index} />
            ))}
            {/* Added a spacer div to prevent the last card from cutting off */}
            <div className="hidden lg:block w-[10vw] flex-shrink-0" />
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