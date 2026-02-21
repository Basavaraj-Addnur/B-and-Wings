"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import ScrollFloat from "@/components/ScrollFloat";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    title: "ENCLEVIA LMS",
    category: "EdTech Strategy",
    image: "/LMS.webp",
    description: "A high-performance learning management system designed for modern scale.",
    link: "https://enclevia.com",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Columate Construction",
    category: "Web Development",
    image: "/constuct.webp",
    description: "Full digital transformation for leading infrastructure providers.",
    link: "https://columate.com/",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Master Gurukula",
    category: "Learning Portal",
    image: "/Gurukula.webp",
    description: "Building a comprehensive hub for government and private job aspirants.",
    link: "https://mastergurukula.com/",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Kannada Flash News",
    category: "Media & News",
    image: "/Flash.webp",
    description: "A trending news portal optimized for maximum speed and SEO.",
    link: "https://kannadaflashnews.com/",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Suvarnagiri Times",
    category: "Digital Journalism",
    image: "/Suvarnagiri.webp",
    description: "One of the leading digital news platforms in Karnataka.",
    link: "https://suvarnatimesofkarnataka.com/latestarticles.php",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Spacedizin",
    category: "Interior Design",
    image: "/Bhim.webp", // Mapping to your available 'Bhim.webp' or similar
    description: "Crafting beautiful, functional spaces through premium web presence.",
    link: "https://spacedizin.com",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Bangalore Fashion Trainings",
    category: "Skill Development",
    image: "/LMS.webp", // Using a placeholder from your public files
    description: "A professional portal for the next generation of fashion experts.",
    link: "https://bangalorefashiontrainings.com",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-6 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.out(2)"
              scrollStart="top 90%"
              scrollEnd="top 40%"
              stagger={0.04}
              textClassName="text-3xl md:text-8xl font-black text-black tracking-tighter leading-none uppercase"
            >
              Projects
            </ScrollFloat>
            <motion.p 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="mt-6 text-gray-500 text-lg max-w-xl"
            >
              We transform brands through strategy, design, and technical mastery. 
              Explore our diverse portfolio of digital growth.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className={`group relative rounded-[2rem] overflow-hidden bg-gray-100 block cursor-pointer ${project.gridClass}`}
              >
                {/* Image Component */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={index < 2}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.span 
                    className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2 block"
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    VISIT WEBSITE <span className="text-yellow-500">↗</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>
    </main>
  );
}