import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/ui/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Navbar } from "@/components/ui/Navbar";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { StarField } from "@/components/ui/StarField";
import { Terminal } from "@/components/ui/Terminal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <LoadingScreen />
      <ScrollProgress />
      <StarField />
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />

      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />

      <Footer />
      <Terminal />
    </main>
  );
}
