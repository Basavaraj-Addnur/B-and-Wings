"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MoveRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import ScrollFloat from "@/Animations/ScrollFloat";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    question: "What Services Does B and Wings Offer?",
    answer:
      "We deliver a complete ecosystem of digital growth solutions including software development, high-performance websites, UI/UX design, influencer campaigns, performance marketing, and scalable IT services — all engineered for measurable growth.",
  },
  {
    question: "How Does B and Wings Measure Success?",
    answer:
      "We track conversions, engagement depth, qualified leads, ROI, and long-term retention. No vanity metrics. Every campaign is optimized around business impact and sustainable brand growth.",
  },
  {
    question: "How Do I Get Started With B and Wings?",
    answer:
      "Book a free strategy consultation. We analyze your goals, design a fully customized roadmap, align execution milestones, and launch your brand with precision-driven strategy.",
  },
  {
    question: "Does B and Wings Provide Ongoing Support?",
    answer:
      "Yes. From continuous optimization and campaign refinement to performance scaling and infrastructure support — we stay with you as your brand evolves.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="relative py-4 pb-10 bg-white text-black overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollFloat
            animationDuration={0.8}
            textClassName="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Frequently Asked Questions
          </ScrollFloat>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#FACC15] to-[#FB923C] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - FAQ */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-yellow-400 shadow-lg shadow-yellow-200/40"
                      : "border-black/10 hover:border-yellow-300"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="text-lg font-bold pr-6">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-yellow-500 flex-shrink-0"
                    >
                      <ChevronDown size={24} strokeWidth={3} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE - SUPPORT BOX */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FACC15] to-[#FB923C] rounded-3xl p-10 text-black shadow-2xl"
          >
            <MessageCircle size={40} className="mb-6" />

            <h3 className="text-2xl font-black mb-4">
              Still Have Questions?
            </h3>

            <p className="mb-8 text-sm leading-relaxed">
              Our team is ready to guide you through strategy,
              execution, and growth planning. Let’s build your
              digital engine together.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold transition hover:scale-105"
            >
              Contact Us
              <MoveRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}