import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <FeaturedCources />
      <WhyChooseUs />
      <MusicSchoolTestimonial />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}



