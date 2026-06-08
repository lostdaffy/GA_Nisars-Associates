import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import ClientsStrip from "../components/Home/ClientsStrip";
import HowItWorks from "../components/Home/HowItWorks";
import FAQ from "../components/Home/FAQ";
import CTABanner from "../components/Home/CTABanner";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialSlider />
      <FAQ />
      <CTABanner />
    </>
  );
};

export default Home;
