"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Sparkles
} from "lucide-react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/cta";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ALL 9 SERVICES RESTORED
  const serviceCategories = [
    {
      title: "Software Engineering",
      image: "/services/1.png",
      desc: "Custom enterprise solutions designed for massive scale. We handle the full lifecycle from microservices to cloud-native SaaS.",
      features: ["Custom Enterprise SaaS", "API-First Architecture", "Cloud-Native Apps"],
      accent: "text-blue-600"
    },
    {
      title: "Web Development",
      image: "/services/2.png",
      desc: "High-performance, responsive websites. We build fully custom, SEO-ready digital storefronts without templates.",
      features: ["Next.js/React Sites", "Headless E-commerce", "Performance Optimization"],
      accent: "text-orange-600"
    },
    {
      title: "IT & Infrastructure",
      image: "/services/4.png",
      desc: "Secure, scalable backend management. We handle cloud hosting, DevOps, and 24/7 system monitoring.",
      features: ["AWS / Azure / GCP", "DevOps Pipelines", "Cybersecurity Protocols"],
      accent: "text-slate-600"
    },
    {
      title: "Digital Marketing",
      image: "/services/6.png",
      desc: "Comprehensive marketing ecosystems. We build the data-driven engine that feeds your sales team.",
      features: ["Email Automation", "Brand Positioning", "Market Analytics"],
      accent: "text-amber-600"
    },
    {
      title: "Influencer Marketing",
      image: "/services/10.png",
      desc: "Authenticity at scale. We connect brands with trusted voices that move the needle and drive conversion.",
      features: ["Influencer Sourcing", "Campaign Strategy", "Performance Tracking"],
      accent: "text-indigo-600"
    },
    {
      title: "UI/UX Design",
      image: "/services/3.png",
      desc: "Psychology-driven design. We create interfaces that are intuitive, beautiful, and strictly functional.",
      features: ["User Research", "Interactive Prototyping", "Design Systems"],
      accent: "text-purple-600"
    },
    {
      title: "Performance Marketing",
      image: "/services/15.png",
      desc: "ROI-obsessed campaigns. We manage paid media with a rigorous 'test, track, and optimize' philosophy.",
      features: ["PPC Management", "Paid Social", "Conversion Rate Optimization"],
      accent: "text-emerald-600"
    },
    {
      title: "Website Maintenance",
      image: "/services/13.png",
      desc: "Peace of mind as a service. Continuous 24/7 monitoring, security patches, and speed optimizations.",
      features: ["Uptime Monitoring", "Security Patching", "Regular Backups"],
      accent: "text-rose-600"
    },
    {
      title: "Rapid Prototyping",
      image: "/services/14.png",
      desc: "Turn your idea into a tangible product in weeks. Perfect for startups looking to validate their MVP quickly.",
      features: ["MVP Development", "Proof of Concept", "Agile Iterations"],
      accent: "text-yellow-600"
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-yellow-200 overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />
      
      <Navbar />

      <main className="relative">
        {/* GOLD GLOW BACKGROUND EFFECT */}
        <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-5%] left-[-10%] w-[120%] h-full bg-[radial-gradient(circle_at_center,_rgba(255,214,0,0.15)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        {/* Header Section */}
        <section className="pt-28 pb-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-yellow-200/50 shadow-sm text-yellow-600 text-xs font-bold mb-4 uppercase tracking-widest"
            >
                <Sparkles size={14} className="animate-pulse" />
                <span>Innovation at Scale</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight"
            >
                Our <span className="text-yellow-500">Core</span> Services
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-4xl mx-auto font-medium"
            >
                We bridge the gap between complex technology and business growth. From lines of code to 
                market dominance, we provide the full-stack expertise your brand needs to scale.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-32 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="group relative rounded-[2.5rem] bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,214,0,0.12)] transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* Service Image Header */}
                  <div className="relative h-64 w-full p-6 flex items-center justify-center">
                    <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-contain drop-shadow-xl"
                        />
                    </div>
                  </div>

                  <div className="p-10 pt-4 flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-black tracking-tight">
                        {service.title}
                    </h3>
                    
                    <p className="text-gray-500 mb-4 leading-relaxed font-medium text-sm line-clamp-3">
                        {service.desc}
                    </p>

                    <div className="pt-6 border-t border-neutral-100/50 space-y-3">
                        {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-[11px] font-bold text-neutral-800 uppercase tracking-widest">
                            <CheckCircle2 size={14} className={`mr-3 ${service.accent} opacity-80`} />
                            {feature}
                        </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <CTA />
      </main>

      <Footer />
    </div>
  );
}