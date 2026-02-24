"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollFloat from "@/Animations/ScrollFloat";

const projects = [
  {
    title: "ENCLEVIA LMS",
    category: "EdTech Strategy",
    image: "/LMS.webp",
    description: "A high-performance learning management system designed for modern scale. We transformed their digital infrastructure to support 100k+ concurrent users.",
    link: "https://enclevia.com",
    stats: { growth: "2.5x", speed: "98/100" }
  },
  {
    title: "COLUMATE",
    category: "Web Development",
    image: "/constuct.webp",
    description: "Full digital transformation for leading infrastructure providers. We bridged the gap between heavy industry and modern UI/UX.",
    link: "https://columate.com/",
    stats: { growth: "40%", speed: "95/100" }
  },
  {
    title: "MASTER GURUKULA",
    category: "Learning Portal",
    image: "/Gurukula.webp",
    description: "Building a comprehensive hub for aspirants. We focused on accessibility and rapid content delivery for rural areas.",
    link: "https://mastergurukula.com/",
    stats: { growth: "3.2x", speed: "99/100" }
  },
  {
    title: "FLASH NEWS",
    category: "Media & News",
    image: "/Flash.webp",
    description: "A trending news portal optimized for maximum speed and SEO. Architecture built to handle viral traffic spikes without latency.",
    link: "https://kannadaflashnews.com/",
    stats: { growth: "150%", speed: "100/100" }
  },
  {
    title: "SPACEDIZIN",
    category: "Interior Design",
    image: "/Bhim.webp",
    description: "Crafting beautiful, functional spaces through premium web presence. A minimalist design approach for a luxury interior brand.",
    link: "https://spacedizin.com",
    stats: { growth: "22%", speed: "96/100" }
  }
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#fafaf5] selection:bg-yellow-200">
      {/* Introduction Header */}
      <section className="h-[25vh] flex flex-col justify-center px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-yellow-600 font-bold tracking-[0.4em] uppercase text-xs mb-1 block"
          >
            Recent Deployments
          </motion.span>

          {isMounted && (
            <div className="relative inline-block">
              <ScrollFloat
                animationDuration={1}
                ease="back.out(2)"
                scrollStart="top 90%"
                scrollEnd="top 50%"
                stagger={0.04}
                containerClassName="m-0 p-0"
                textClassName="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-black"
              >
                Case Studies.
              </ScrollFloat>
              
              {/* Gradient Line added below "Case Studies." */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[4px] mt-2 bg-gradient-to-r from-[#FFD600] to-[#FF8A00] rounded-full mx-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Interactive Sticky Section */}
      <section ref={containerRef} className="relative">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT: Scrolling Details */}
          <div className="w-full lg:w-1/2 px-10 lg:px-20">
            {projects.map((project, index) => (
              <ProjectText key={index} project={project} index={index} />
            ))}
          </div>

          {/* RIGHT: Fixed Media Window */}
          <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center px-10">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
              {projects.map((project, index) => (
                <ProjectImage 
                  key={index} 
                  project={project} 
                  index={index} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <section className="h-[5vh] bg-[#fafaf5]" />
    </main>
  );
}

const ProjectText = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ margin: "-20% 0px -20% 0px" }}
      className="flex flex-col justify-center h-screen"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl font-black text-gray-400">0{index + 1}</span>
        <div className="h-[2px] w-12 bg-yellow-500" />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
        {project.title}
      </h2>
      
      <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-md">
        {project.description}
      </p>

      <div className="flex gap-8 mb-10">
        <div>
          <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Impact</p>
          <p className="text-2xl font-black text-black">{project.stats.growth}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Performance</p>
          <p className="text-2xl font-black text-black">{project.stats.speed}</p>
        </div>
      </div>
      
      <a 
        href={project.link}
        target="_blank"
        className="group flex items-center gap-4 w-fit bg-gradient-to-r from-[#fcd303] via-[#ffb800] to-[#ff7e05] text-black px-7 py-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,126,5,0.3)] shadow-lg active:scale-95"
      >
        <span className="font-[900] text-lg tracking-tight">Visit Platform</span>
        <ArrowRight className="w-5 h-5 stroke-[3px] transition-transform group-hover:translate-x-2" />
      </a>
    </motion.div>
  );
};

const ProjectImage = ({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) => {
  const amount = projects.length;
  const step = 1 / amount;
  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    [start - step * 0.5, start - step * 0.1, end - step * 0.1, end + step * 0.2],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress, 
    [start, end], 
    [1.05, 1]
  );

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center bg-white"
    >
      <motion.div style={{ scale }} className="relative h-full w-full p-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-2"
          priority={index === 0}
        />
      </motion.div>
    </motion.div>
  );
};