"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { 
  Code2, 
  Globe, 
  TrendingUp, 
  Layout, 
  Server, 
  Users, 
  ShieldCheck, 
  Zap, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import CTA from "@/components/cta";

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const serviceCategories = [
    {
      title: "Software Engineering",
      icon: <Code2 size={32} />,
      desc: "Custom enterprise solutions designed for massive scale. We handle the full lifecycle from microservices architecture to cloud-native SaaS platforms.",
      features: ["Custom Enterprise SaaS", "Legacy System Modernization", "API-First Architecture", "Cloud-Native Apps"]
    },
    {
      title: "Web Development",
      icon: <Globe size={32} />,
      desc: "High-performance, responsive websites that reflect your brand identity. We build fully custom, SEO-ready digital storefronts without templates.",
      features: ["Custom Next.js/React Sites", "Headless E-commerce", "Performance Optimization", "SEO & Web Vitals"]
    },
    {
      title: "Performance Marketing",
      icon: <TrendingUp size={32} />,
      desc: "Data-driven growth strategies focused on ROI. We manage high-converting campaigns across Google, Meta, and YouTube with a focus on CAC and LTV.",
      features: ["PPC Management", "Paid Social Strategy", "Retargeting Campaigns", "Conversion Rate Optimization"]
    },
    {
      title: "UI/UX Design",
      icon: <Layout size={32} />,
      desc: "Psychology-driven design that guides users toward action. We create interfaces that are intuitive, beautiful, and strictly functional.",
      features: ["User Research & Audits", "Interactive Prototyping", "Scalable Design Systems", "Mobile-First Experiences"]
    },
    {
      title: "IT & Infrastructure",
      icon: <Server size={32} />,
      desc: "Secure, scalable backend management for modern businesses. We handle cloud hosting, DevOps, and 24/7 system monitoring.",
      features: ["AWS / Azure / GCP Cloud", "DevOps & CI/CD Pipelines", "Cybersecurity Protocols", "24/7 Server Support"]
    },
    {
      title: "Social Authority",
      icon: <Users size={32} />,
      desc: "Building real influence through strategic content and community management. We connect brands with voices that actually convert.",
      features: ["Influencer Marketing", "Social Media Handling", "Content Production", "Community Growth"]
    },
    {
      title: "Website Maintenance",
      icon: <ShieldCheck size={32} />,
      desc: "Continuous care for your digital assets. We ensure your site remains fast, secure, and updated while you focus on your business.",
      features: ["Uptime Monitoring", "Security Patching", "Regular Backups", "Speed Audits"]
    },
    {
      title: "Strategic Digital Marketing",
      icon: <BarChart3 size={32} />,
      desc: "Comprehensive marketing ecosystems. From email automation to search engine dominance, we build the engine that feeds your sales team.",
      features: ["Email Automation", "Content Strategy", "Brand Positioning", "Market Analytics"]
    },
    {
      title: "Rapid Prototyping",
      icon: <Zap size={32} />,
      desc: "Turn your idea into a tangible product in weeks, not months. Perfect for startups looking to validate their MVP quickly.",
      features: ["MVP Development", "Proof of Concept", "Agile Iterations", "User Testing"]
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Header Section */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
            >
              Our <span className="text-yellow-500">Core</span> Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We bridge the gap between complex technology and business growth. 
              From lines of code to market dominance, we provide the full-stack 
              expertise your brand needs to scale.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                >
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-500">
                    {React.isValidElement(service.icon) ? 
                      React.cloneElement(service.icon as React.ReactElement<any>, {
                        className: "text-yellow-600 group-hover:text-white transition-colors duration-500"
                      }) : service.icon
                    }
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="mt-auto space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm font-medium text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
              <CTA/>
        </main>

      <Footer />
    </div>
  );
}