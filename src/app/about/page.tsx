"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

// Animation Variants for Interactive Cards
const cardHover = {
  initial: { scale: 1, boxShadow: "0px 10px 20px rgba(0,0,0,0.03)" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 20px 40px rgba(250, 204, 21, 0.15)", // Subtle Yellow Glow
    borderColor: "rgba(250, 204, 21, 0.4)" 
  }
};

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle Parallax effect for the hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-white text-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 text-center">
        {/* Decorative Yellow Background Blur */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-100/50 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter"
            >
              Building Brands With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400">
                Digital Wings
              </span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
            >
              B & Wings is a growth-obsessed digital agency. We don't just build websites; 
              we craft high-velocity digital ecosystems that turn startups into industry leaders.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are & Mission */}
      <section className="py-24 px-6 bg-[#fffdf5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* "Who We Are" Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-yellow-100 shadow-xl shadow-yellow-100/20"
            >
              <div className="w-12 h-1 bg-yellow-400 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a collective of strategists, designers, and growth hackers 
                working in synergy. We believe that great design is only valuable 
                when it's fueled by data and built for scalability.
              </p>
            </motion.div>

            {/* "Our Mission" Brand Color Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-3xl bg-yellow-400 text-black shadow-2xl shadow-yellow-200/50"
            >
              <div className="w-12 h-1 bg-black/20 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="font-medium text-black/80 text-lg leading-relaxed">
                To engineer digital wings for ambitious brands. Our goal is simple: 
                to create scalable solutions that generate consistent revenue growth 
                and long-term brand equity for our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16"
          >
            The Values That Drive Us
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Results First", desc: "Measurable ROI over vanity metrics." },
              { title: "Strategy First", desc: "No pixels moved without a plan." },
              { title: "Transparency", desc: "Clear communication at every stage." },
              { title: "Partnership", desc: "We grow only when you grow." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="p-8 rounded-2xl border border-gray-100 bg-white flex flex-col items-center justify-center text-center cursor-pointer transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-yellow-200">
                  <span className="text-yellow-700 font-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 rounded-[40px] bg-yellow-50 border border-yellow-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to grow?</h2>
          <p className="text-gray-600 text-xl mb-10">Let's build your brand's digital ecosystem together.</p>
          <a 
            href="/contact" 
            className="px-10 py-4 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-200 active:scale-95"
          >
            Work With Us
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}