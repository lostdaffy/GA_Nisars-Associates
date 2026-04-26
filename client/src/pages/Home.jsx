import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import TestimonialSlider from "../components/Home/TestimonialSlider";

const Home = () => {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <TestimonialSlider />
    </>
  );
};

export default Home;
