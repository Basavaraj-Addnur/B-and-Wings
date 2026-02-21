"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 text-center overflow-hidden">
        {/* Decorative background glow - Switched to Yellow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-100/50 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Let’s Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              Next Big Win
            </span>.
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to scale your brand? Drop us a message below and we’ll begin 
            crafting your custom digital strategy.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Contact Information (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
              <p className="text-gray-500 mb-8">
                Prefer direct communication? Reach out via any of these channels. 
                Our team typically responds within 4 business hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@bandwings.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 88888 88888" },
                { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "Bengaluru, India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="bg-white p-8 md:p-12 rounded-[32px] border border-yellow-50 shadow-2xl shadow-yellow-100/40 grid gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@agency.com"
                    className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Company */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Company</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
                  />
                </div>
                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Budget Range</label>
                  <select className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 transition-all outline-none appearance-none cursor-pointer">
                    <option>Choose Budget</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button - Switched to Yellow/Orange Gradient */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-max bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-yellow-100 hover:shadow-yellow-200 transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}