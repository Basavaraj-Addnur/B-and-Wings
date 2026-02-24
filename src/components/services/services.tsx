"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import ScrollFloat from "@/Animations/ScrollFloat";
import MagicBento from "@/Animations/MagicBento"; 
import { useState, useEffect } from "react";
import { MoveRight } from 'lucide-react';

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const servicesData = [
    {
      title: "Software Development",
      desc: "Engineered for scale. We build custom enterprise solutions and robust SaaS products using a modern full-stack approach.",
      image: "/services/1.png",
    },
    {
      title: "Website Development",
      desc: "Your digital flagship. We craft high-performance, SEO-optimized websites designed to convert visitors into loyal customers.",
      image: "/services/2.png",
    },
    {
      title: "IT Services",
      desc: "Infrastructure you can trust. Secure cloud hosting and proactive system support tailored to power your business growth.",
      image: "/services/4.png",
    },
    {
      title: "Digital Marketing",
      desc: "Growth, quantified. Our data-driven strategies cut through the noise to reach your target audience.",
      image: "/services/6.png",
    },
    {
      title: "Influencer Marketing",
      desc: "Authenticity at scale. We bridge the gap between your brand and the trusted voices that move the needle.",
      image: "/services/10.png",
    },
    {
      title: "Social Media Management",
      desc: "Build a community, not just a following. Engaging daily content and smart analytics.",
      image: "/services/14.png",
    },
    {
      title: "UI/UX Design",
      desc: "User-centric by design. We transform complex ideas into intuitive, beautiful interfaces that prioritize the user journey.",
      image: "/services/3.png",
    },
    {
      title: "Performance Marketing",
      desc: "ROI-obsessed campaigns. We manage paid media with a rigorous 'test, track, and optimize' philosophy.",
      image: "/services/15.png",
    },
    {
      title: "Website Maintenance",
      desc: "Peace of mind as a service. Continuous 24/7 monitoring, security patches, and speed optimizations.",
      image: "/services/13.png",
    },
  ];

  return (
    <section className="pt-10 pb-10 bg-white text-black relative min-h-screen">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          {isMounted && (
            <ScrollFloat
              animationDuration={0.8}
              textClassName="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight"
            >
              Our Core Services
            </ScrollFloat>
          )}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="text-gray-600 max-w-xl mx-auto text-xl font-medium"
          >
            We build high-impact digital systems that turn complexity into growth.
          </motion.p>
        </div>

        <MagicBento services={servicesData} glowColor="250, 204, 21" />

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FACC15] to-[#FB923C] text-black px-6 py-3 rounded-full font-black text-lg transition-all hover:brightness-110 active:scale-95 shadow-lg group"
          >
            Start Your Project
            <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}