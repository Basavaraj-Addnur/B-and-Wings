import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/layouts/hero";
import Services from "@/components/services/services";
import Process from "@/components/process/process";
import CaseStudies from "@/components/casestudy/case-studies";
import Testimonials from "@/components/layouts/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer/footer";
import ServicesMarquee from "@/components/layouts/ServicesMarquee";
import FaqSection from "@/components/layouts/FaqSection";
import HomeClientWrapper from "@/components/layouts/HomeClientWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <HomeClientWrapper>
          <ServicesMarquee />
          <Services />
          <Process />
          <CaseStudies />
          <Testimonials />
          <FaqSection />
          <CTA />
          <Footer />
        </HomeClientWrapper>
      </main>
    </>
  );
}