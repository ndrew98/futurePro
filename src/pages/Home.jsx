import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedJobsSection from "../components/FeaturedJobsSection";
import TestimonialsSection from "../components/TestimonalsSection";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CtaSection";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedJobsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Hero />
    </div>
  );
};

export default Home;
