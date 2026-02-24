"use client";

import { motion } from "framer-motion";
import ScrollFloat from "@/Animations/ScrollFloat";
import Navbar from "../layouts/navbar";
import Footer from "./footer";

export default function TermsOfUsePage() {
  return (
    <><Navbar /><section className="bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto pt-5 pb-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollFloat
            animationDuration={0.8}
            textClassName="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Terms of Use
          </ScrollFloat>

          <div className="h-1 w-28 bg-gradient-to-r from-[#FACC15] to-[#FB923C] mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg">
            Effective Date: November 2025 <br />
            Last Updated: February 2026
          </p>
        </div>

        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">

          <Section title="1. Acceptance of Terms">
            By accessing or using https://bandwings.com and our services,
            you agree to comply with these Terms of Use. If you do not agree,
            please refrain from using our website or services.
          </Section>

          <Section title="2. Services">
            B and Wings provides digital services including website
            development, app development, automation, marketing,
            branding, and IT consulting. Service scope, pricing,
            and deliverables are governed by individual agreements.
          </Section>

          <Section title="3. User Responsibilities">
            Users agree to:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide accurate information</li>
              <li>Use services lawfully</li>
              <li>Not attempt to disrupt website functionality</li>
              <li>Not misuse intellectual property</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            All content, branding, logos, graphics, and website materials
            are owned or licensed by B and Wings. Unauthorized use,
            reproduction, or distribution is strictly prohibited.
          </Section>

          <Section title="5. Payments & Billing">
            Payments made via Razorpay or other gateways must comply with
            agreed payment terms. Delays or failures in payment may
            result in suspension of services.
          </Section>

          <Section title="6. Limitation of Liability">
            B and Wings shall not be liable for indirect, incidental,
            or consequential damages arising from the use of our
            website or services.
          </Section>

          <Section title="7. Termination">
            We reserve the right to suspend or terminate services
            if users violate these Terms or engage in unlawful conduct.
          </Section>

          <Section title="8. Governing Law">
            These Terms shall be governed under the laws of India.
            Any disputes shall be subject to the jurisdiction of
            courts located in Bengaluru, Karnataka.
          </Section>

          <Section title="9. Changes to Terms">
            We may update these Terms periodically.
            Continued use of our services constitutes acceptance
            of the revised terms.
          </Section>

          <Section title="10. Contact Information">
            📧 bandwingsofficial@gmail.com <br />
            📞 +91 87924 96446 / +91 81477 82338 <br />
            📍 Malleshwaram, Bengaluru, India
          </Section>

        </div>

        <div className="text-center mt-20 text-xl font-semibold">
          B and Wings – Digital Growth. Built on Trust.
        </div>
      </div>
      <Footer/>
    </section></>
  );
}

function Section({ title, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </motion.div>
  );
}