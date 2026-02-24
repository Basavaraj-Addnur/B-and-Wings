"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const caseStudies = [
  {
    client: "D2C Fashion Brand",
    challenge:
      "Low conversion rate and high ad spend inefficiency.",
    solution:
      "Redesigned website UX, optimized product funnels, and restructured paid ad campaigns.",
    results:
      "72% increase in conversion rate and 3.5X ROI within 4 months.",
  },
  {
    client: "SaaS Startup",
    challenge:
      "High churn and unclear value proposition.",
    solution:
      "Refined messaging, landing pages, and onboarding user flow.",
    results:
      "45% improvement in user retention and 60% growth in signups.",
  },
  {
    client: "Local Service Business",
    challenge:
      "Low online visibility and inconsistent lead generation.",
    solution:
      "SEO optimization, high-converting landing pages, and performance ads.",
    results:
      "5X increase in monthly leads and 40% lower acquisition cost.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="py-28 px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold"
          >
            Case <span className="accent">Studies</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-600"
          >
            See how we transform challenges into measurable growth
            opportunities for ambitious brands.
          </motion.p>
        </motion.div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.client}
              </h3>

              <div className="mb-4">
                <p className="font-semibold">Challenge:</p>
                <p className="text-gray-600">{item.challenge}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold">Solution:</p>
                <p className="text-gray-600">{item.solution}</p>
              </div>

              <div>
                <p className="font-semibold">Results:</p>
                <p className="accent font-semibold">
                  {item.results}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}
