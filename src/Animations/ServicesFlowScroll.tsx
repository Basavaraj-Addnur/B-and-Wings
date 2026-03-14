"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  image: string;
}

const row1: ServiceItem[] = [
  { title: "Website Development", image: "/services/2.png" },
  { title: "App Development", image: "/services/1.png" }, 
  { title: "Software Development", image: "/services/1.png" },
];

const row2: ServiceItem[] = [
  { title: "Digital Marketing", image: "/services/6.png" },
  { title: "Performance Marketing", image: "/services/15.png" },
  { title: "Social Media Management", image: "/services/14.png" },
];

const ScrollingRow = ({ items, baseVelocity }: { items: ServiceItem[], baseVelocity: number }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-0">
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: baseVelocity > 0 ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: 35, // Slightly slower so the larger images don't cause motion blur
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Doubling items to create seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6 group">
            {/* Image Box - Background removed, size increased */}
            <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain"
                style={{ backgroundColor: 'transparent' }} 
              />
            </div>
            
            {/* Text */}
            <span className="text-black uppercase font-black text-3xl md:text-5xl tracking-tighter">
              {item.title}
            </span>

            {/* Separator Dot */}
            <span className="text-yellow-400 text-4xl ml-4">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ServicesFlowScroll() {
  return (
    <section className="relative bg-white py-20 overflow-hidden border-y border-gray-100">
      <div className="flex flex-col gap-12">
        {/* Row 1: Moves Left */}
        <ScrollingRow items={row1} baseVelocity={1} />
        
        {/* Row 2: Moves Right */}
        <ScrollingRow items={row2} baseVelocity={-1} />
      </div>

      {/* Side Gradients to fade items in and out beautifully */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}