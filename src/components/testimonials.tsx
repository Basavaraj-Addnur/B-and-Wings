"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Mapped from your public/clients folder (1-11) 
const clientLogos = Array.from({ length: 11 }, (_, i) => `/clients/${i + 1}.webp`);

// Mapped from your public/platforms folder (1-10) 
const platformLogos = Array.from({ length: 10 }, (_, i) => `/platforms/${i + 1}.webp`);

export default function Platforms() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- CLIENTS SLIDER (Moving Left to Right) --- */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-gray-400">Our Trusted Clients</h3>
          </motion.div>

          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-44 h-24 mx-6 flex items-center justify-center opacity-100 transition-all duration-500">
                  <Image src={logo} alt="Client Logo" width={140} height={60} className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- PLATFORMS SLIDER (Moving Right to Left) --- */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-gray-400">Platforms We Work With</h3>
          </motion.div>

          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...platformLogos, ...platformLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-44 h-24 mx-6 flex items-center justify-center opacity-100 transition-all duration-500">
                  <Image src={logo} alt="Platform Logo" width={140} height={60} className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}