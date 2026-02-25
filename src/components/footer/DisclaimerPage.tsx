"use client";

import { motion } from "framer-motion";
import ScrollFloat from "@/Animations/ScrollFloat";
import Navbar from "../layouts/navbar";
import Footer from "./footer";

export default function DisclaimerPage() {
  return (
    <><Navbar /><section className="bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto pt-5 pb-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollFloat
            animationDuration={0.8}
            textClassName="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Disclaimer
          </ScrollFloat>

          <div className="h-1 w-24 bg-gradient-to-r from-[#FACC15] to-[#FB923C] mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg">
            Effective Date: November 2025 <br />
            Last Updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Welcome to <strong>B and Wings</strong>. This Disclaimer applies
              to our website <strong>https://bandwings.com</strong>, related
              digital platforms, and all communications or materials shared by
              our team.
            </p>
            <p className="mt-4">
              By accessing or using our website and services, you acknowledge
              and agree to the terms stated below.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
            <p>
              The information provided by B and Wings (“we,” “our,” or “us”) is
              for general informational and promotional purposes only.
              While we strive to keep information accurate and up to date,
              we make no representations or warranties regarding completeness,
              reliability, or accuracy.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              2. Professional Advice Disclaimer
            </h2>
            <p>
              Content on our website — including guides, case studies,
              marketing strategies, and articles — is provided for educational
              and informational purposes only.
            </p>
            <p className="mt-4">
              It should not be considered professional, legal, financial, or
              business advice. Users are encouraged to seek qualified
              professional consultation before acting on any information
              obtained from our platform.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">3. Service Disclaimer</h2>
            <p>
              Our services — including website development, app development,
              automation, marketing, and branding — are provided on an
              “as-is” basis.
            </p>
            <p className="mt-4">
              Business outcomes such as traffic growth, leads, or sales may
              vary depending on industry, competition, strategy, and external
              market conditions.
            </p>
            <p className="mt-4">
              B and Wings does not guarantee specific results unless explicitly
              stated in a signed agreement.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              4. External Links Disclaimer
            </h2>
            <p>
              Our website may contain links to third-party websites or external
              resources for convenience.
            </p>
            <p className="mt-4">
              We are not responsible for the accuracy, content, or privacy
              practices of any external sites. Accessing third-party links is
              done at your own risk.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              5. Limitation of Liability
            </h2>

            <ul className="list-disc pl-6 space-y-3">
              <li>Use of or inability to use our website or services</li>
              <li>Errors, omissions, or delays in website content</li>
              <li>Third-party actions or service interruptions</li>
              <li>Data breaches beyond our reasonable control</li>
            </ul>

            <p className="mt-4">
              Your use of our website and services is at your own discretion
              and risk.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              6. Testimonials & Case Studies
            </h2>
            <p>
              Testimonials and case studies displayed represent individual
              client experiences.
            </p>
            <p className="mt-4">
              Results may vary depending on market conditions and strategic
              execution. We do not claim identical outcomes for all clients.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              7. Copyright & Ownership
            </h2>
            <p>
              All website content, branding, graphics, and materials are owned
              or licensed by B and Wings and are protected under applicable
              intellectual property laws.
            </p>
            <p className="mt-4">
              Unauthorized use, duplication, or distribution is strictly
              prohibited.
            </p>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              8. Updates to This Disclaimer
            </h2>
            <p>
              We may revise this Disclaimer periodically to reflect updated
              regulations or company policies. The latest version will always
              be available on this page.
            </p>
          </motion.div>

          {/* Section 9 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p>
              📧 bandwingsofficial@gmail.com <br />
              📞 +91 87924 96446 / +91 81477 82338 <br />
              📍 86, 8th cross Road, above Amma's pastries, yallappa garden, Malleshwaram, Bengaluru, India <br />
              🌐 www.bandwings.com
            </p>
          </motion.div>

        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-20 text-xl font-semibold">
          B and Wings – We build digital trust through transparency and accountability.
        </div>
      </div>
      <Footer/>
    </section></>
  );
}