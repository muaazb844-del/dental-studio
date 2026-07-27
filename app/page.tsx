import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Doctor from "@/components/home/Doctor";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Appointment from "@/components/home/Appointment";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Doctor />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Appointment />
        <CTA />
        <Footer />
      </main>
    </>
  );
}