import React from "react";
import HeroSection from "../components/HeroSection";
import HeroSection1 from "../components/Hero1";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedJobsSection from "../components/FeaturedJobsSection";
import TestimonialsSection from "../components/TestimonalsSection";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CtaSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <HeroSection1 /> */}
      <AboutSection />
      <ServicesSection />
      <FeaturedJobsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;
