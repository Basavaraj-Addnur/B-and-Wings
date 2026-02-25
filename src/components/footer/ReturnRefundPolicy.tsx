"use client";

import { motion } from "framer-motion";
import ScrollFloat from "@/Animations/ScrollFloat";
import Navbar from "../layouts/navbar";
import Footer from "./footer";

export default function ReturnRefundPolicy() {
  return (
    <><Navbar /><section className="bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto pt-5 pb-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollFloat
            animationDuration={0.8}
            textClassName="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Return & Refund Policy
          </ScrollFloat>

          <div className="h-1 w-28 bg-gradient-to-r from-[#FACC15] to-[#FB923C] mx-auto mt-6 rounded-full" />

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
              Thank you for choosing <strong>B and Wings</strong>. We are committed to
              delivering high-quality digital services including website
              development, app development, marketing, software solutions, and
              automation systems.
            </p>
            <p className="mt-4">
              This Return and Refund Policy outlines the conditions under which
              refunds may be issued for our services.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              1. General Policy
            </h2>
            <p>
              As B and Wings provides customized digital services tailored to
              each client’s business goals, services are generally
              non-refundable once project work has started or deliverables have
              been shared.
            </p>
            <p className="mt-4">
              Each engagement involves strategic planning, creative execution,
              and technical implementation which cannot be reversed once
              initiated.
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
              2. Eligibility for Refunds
            </h2>

            <div className="space-y-4">
              <p>
                <strong>Duplicate Payment:</strong> If a customer makes a
                duplicate payment for the same service, the excess amount will
                be refunded within 7–10 business days after verification.
              </p>

              <p>
                <strong>Service Non-Delivery:</strong> If a service cannot be
                initiated due to reasons solely attributable to B and Wings,
                and no work has been delivered, a refund may be approved after
                internal review.
              </p>

              <p>
                <strong>Project Cancellation (Before Work Begins):</strong> If
                cancellation occurs before any work has started, a partial
                refund may be considered after deducting administrative and
                consultation charges.
              </p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              3. Non-Refundable Situations
            </h2>

            <ul className="list-disc pl-6 space-y-3">
              <li>Approval of initial designs, wireframes, or mockups.</li>
              <li>Client-side delays (content, approvals, communication).</li>
              <li>SEO, Marketing, Hosting, or Maintenance services after commencement.</li>
              <li>Digital products or software licenses once access is shared.</li>
              <li>Change-of-mind or dissatisfaction without valid performance issues.</li>
            </ul>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              4. Project Delivery & Revisions
            </h2>
            <p>
              All projects are delivered as per mutually agreed timelines and
              scope. Clients are entitled to revisions within the agreed scope.
              However, full refunds are not applicable after project
              components are delivered.
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
              5. Refund Processing Time
            </h2>
            <p>
              Approved refunds will be processed within 7–10 business days and
              credited to the original payment method, subject to payment
              gateway and banking timelines.
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
              6. Payment Gateway Disclaimer
            </h2>
            <p>
              Payments processed via Razorpay or other third-party gateways are
              subject to their respective terms. B and Wings does not store
              payment credentials or sensitive financial data.
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
              7. Cancellation Requests
            </h2>
            <p>
              Cancellation requests must be submitted in writing within 48
              hours of payment and before project initiation.
            </p>
            <p className="mt-4 font-semibold">
              📧 bandwingsofficial@gmail.com
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
              8. Contact for Refund Requests
            </h2>
            <p>
              📧 bandwingsofficial@gmail.com
              <br />
              📞 +91 87924 96446 / +91 81477 82338
              <br />
              📍 86, 8th cross Road, above Amma's pastries, yallappa garden, Malleshwaram, Bengaluru, India
            </p>
          </motion.div>

          {/* Section 9 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">
              9. Policy Updates
            </h2>
            <p>
              B and Wings reserves the right to update this policy at any time.
              The latest version will always be available on this page.
            </p>
          </motion.div>

        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-20 text-xl font-semibold">
          B and Wings – Transparent. Reliable. Committed to Your Growth.
        </div>
      </div>
      <Footer/>
    </section></>
  );
}