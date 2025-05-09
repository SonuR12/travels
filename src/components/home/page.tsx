import { HeroSection } from "@/components/home/hersoSection";
import ImageSection from "@/components/home/ImageSection";
import Footer from "@/components/shared/footer";
import TestimonialsPage from "@/components/home/TestimonialsPage";
import React from "react";

export default function HomePage(){
  return (
    <div className="pt-16">
      <HeroSection />
      {/* <ContactForm /> */}
      <ImageSection />
      <TestimonialsPage />
      <Footer />
    </div>
  );
};
