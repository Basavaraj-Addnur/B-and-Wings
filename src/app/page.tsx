"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Home() {
  const [canShowContent, setCanShowContent] = useState(false);

  // This matches your REDUCED_DURATION in the Hero component
  const VIDEO_DURATION = 7000; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShowContent(true);
    }, VIDEO_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero always renders first */}
        <Hero />

        {/* This wrapper hides all subsequent sections until the video finishes.
          The 'opacity-0' and 'h-0' ensure the lower pages don't "peek" through 
          or cause scroll issues while the video is playing.
        */}
        <div 
          className={`transition-all duration-1000 ease-in-out ${
            canShowContent 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible h-0 overflow-hidden translate-y-10"
          }`}
        >
          <ServicesMarquee/>
          <Services />
          <Process />
          <CaseStudies />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}