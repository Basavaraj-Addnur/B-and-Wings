import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ServicesFlowScroll from "@/Animations/ServicesFlowScroll";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Add spacing only to hero */}
        <div className="pt-20">
          <Hero />
        </div>
      <ServicesFlowScroll/>
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
