
import { HeroSection } from "@/components/home/hersoSection";
import ImageSection from "@/components/home/ImageSection";
import TestimonialsPage from "@/components/home/TestimonialsPage";

export const metadata = {
  title: "Bae Travels - Your Gateway to Adventure",
  description:
    "Welcome to Bae Travels! Discover breathtaking destinations, curated travel experiences, and expert guidance for your next adventure.",
};

export default function Home() {
  return (
  <>
  <HeroSection />
  {/* <ContactForm /> */}
  <ImageSection />
  <TestimonialsPage /> 
  </>
);
}
