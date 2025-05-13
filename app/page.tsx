import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionSection from "@/components/vision-section"
import WhyJoinSection from "@/components/why-join-section"
import CareersSection from "@/components/careers-section"
import InFocusSection from "@/components/in-focus-section"
import FounderSection from "@/components/founder-section"
import AdminNote from "@/components/admin-note"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-[#0a0d14] dark:bg-[#0a0d14]">
        <AboutSection />
        <VisionSection />
        <WhyJoinSection />
        <CareersSection />
        <InFocusSection />
        <FounderSection />
        <AdminNote />
      </div>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </main>
  )
}
