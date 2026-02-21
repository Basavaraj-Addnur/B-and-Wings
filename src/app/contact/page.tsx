"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-50/50 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/30 blur-[100px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Touch</span>.
            </h1>
            <p className="text-gray-500 text-base max-w-lg">
              Ready to scale? Fill out the form or reach out directly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Contact Information (Left Side) - Normal Position */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "connect@bandwings.com" },
                  { icon: <Phone className="w-4 h-4" />, label: "Call", value: "+91 87924 96446" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Office", value: "8th cross, yallappa garden, Malleshwaram, Bengaluru, India" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-brand-gradient group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="font-bold text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Card (Right Side) - Updated with slight PT and adjusted MT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 lg:-mt-24 pt-2.5 relative z-10" // lg:-mt-24 reduces the pull up slightly, pt-2.5 adds exactly 10px spacing
            >
              <form className="bg-white p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-xl grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name "
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Budget</label>
                    <div className="relative">
                        <select className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none appearance-none cursor-pointer text-sm font-medium">
                          <option>Select Budget</option>
                          <option>10k – 15k</option>
                          <option>55k – 75k</option>
                          <option>100k+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-gray-400">▼</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your goals..."
                    className="w-full bg-gray-50 border border-transparent p-3.5 rounded-xl focus:bg-white focus:border-yellow-400 transition-all outline-none resize-none text-sm font-medium"
                  />
                </div>

                {/* Button Centered and Styled like "Get Started" */}
                <div className="flex justify-center mt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_25px_rgba(251,191,36,0.4)] transition-all"
                  >
                    <span className="text-xs uppercase tracking-widest">Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}