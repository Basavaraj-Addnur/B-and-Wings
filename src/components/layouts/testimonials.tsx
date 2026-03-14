"use client";

import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import Image from "next/image";

// 1. Clients: 1-10 .webp
const clientLogos = Array.from({ length: 10 }, (_, i) => `/clients/${i + 1}.webp`);

// 2. Platforms: 1-10 .webp, 11-16 .png
const platformLogos = Array.from({ length: 16 }, (_, i) => {
  const index = i + 1;
  const extension = index <= 10 ? "webp" : "png";
  return `/platforms/${index}.${extension}`;
});

export default function Platforms() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full">
        
        {/* --- CLIENTS SLIDER (Moving Left to Right) --- */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">Our Trusted Clients</h3>
          </motion.div>

          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div 
                  key={`client-${index}`} 
                  // SIZE INCREASED ONLY HERE: w-40 h-24
                  className="relative flex-shrink-0 w-40 h-40 mx-8 flex items-center justify-center"
                >
                  <Image 
                    src={logo} 
                    alt="Client Logo" 
                    fill
                    className="object-contain" 
                    sizes="160px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- PLATFORMS SLIDER (Moving Right to Left) --- */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">Platforms We Work With</h3>
          </motion.div>

          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...platformLogos, ...platformLogos].map((logo, index) => (
                <div 
                  key={`platform-${index}`} 
                  // SIZE REMAINS SMALL: w-32 h-20
                  className="relative flex-shrink-0 w-32 h-20 mx-10 flex items-center justify-center"
                >
                  <Image 
                    src={logo} 
                    alt="Platform Logo" 
                    fill
                    className="object-contain" 
                    sizes="128px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}