"use client";

import { motion } from "framer-motion";
import ScrollFloat from "@/Animations/ScrollFloat";
import Navbar from "../layouts/navbar";
import Footer from "./footer";

export default function PrivacyPolicyPage() {
  return (
    <><Navbar /><section className="bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto pt-5 pb-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <ScrollFloat
            animationDuration={0.8}
            textClassName="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Privacy Policy
          </ScrollFloat>

          <div className="h-1 w-28 bg-gradient-to-r from-[#FACC15] to-[#FB923C] mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg">
            Effective Date: November 2025 <br />
            Last Updated: February 2026
          </p>
        </div>

        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">

          <Section title="1. Information We Collect">
            We may collect:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Business information</li>
              <li>Project details shared voluntarily</li>
              <li>Website usage data via analytics tools</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            Your information is used to:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide and manage services</li>
              <li>Respond to inquiries</li>
              <li>Improve website experience</li>
              <li>Send important updates</li>
            </ul>
          </Section>

          <Section title="3. Data Protection">
            We implement appropriate technical and organizational
            measures to safeguard your data. Payment details are
            processed securely through Razorpay and are not stored
            on our servers.
          </Section>

          <Section title="4. Cookies & Tracking">
            Our website may use cookies and analytics tools to
            enhance user experience and understand traffic patterns.
            Users may disable cookies in browser settings.
          </Section>

          <Section title="5. Third-Party Sharing">
            We do not sell or trade personal information.
            Information may be shared only with trusted service
            providers strictly for operational purposes.
          </Section>

          <Section title="6. Your Rights">
            Users may request access, correction, or deletion of
            personal data by contacting us directly.
          </Section>

          <Section title="7. Data Retention">
            Personal data is retained only as long as necessary
            for service delivery or legal compliance.
          </Section>

          <Section title="8. Updates to Policy">
            This Privacy Policy may be updated periodically.
            The latest version will always be published on this page.
          </Section>

          <Section title="9. Contact Us">
            📧 bandwingsofficial@gmail.com <br />
            📞 +91 87924 96446 / +91 81477 82338 <br />
            📍 86, 8th cross Road, above Amma's pastries, yallappa garden, Malleshwaram, Bengaluru, India <br />
            🌐 https://bandwings.com
          </Section>

        </div>

        <div className="text-center mt-20 text-xl font-semibold">
          B and Wings – Your Data. Protected. Always.
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