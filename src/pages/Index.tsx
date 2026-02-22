import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CatBirthdaySection from "@/components/CatBirthdaySection";
import MonkeyMemeSection from "@/components/MonkeyMemeSection";
import VersionsSection from "@/components/VersionsSection";
import UpsDownsSection from "@/components/UpsDownsSection";
import GrowthSection from "@/components/GrowthSection";
import PhotoCollageSection from "@/components/PhotoCollageSection";
import BirthdayGiftSection from "@/components/BirthdayGiftSection";

const sections = [
  "cat",
  "monkey",
  "versions",
  "upsdowns",
  "growth",
  "collage",
  "birthday",
] as const;

type Section = (typeof sections)[number];

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("cat");

  const goTo = (section: Section) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentSection(section);
  };

  const currentIdx = sections.indexOf(currentSection);
  const prev = currentIdx > 0 ? sections[currentIdx - 1] : undefined;

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentSection === "cat" && (
          <CatBirthdaySection key="cat" onComplete={() => goTo("monkey")} />
        )}
        {currentSection === "monkey" && (
          <MonkeyMemeSection key="monkey" onComplete={() => goTo("versions")} onBack={() => goTo("cat")} />
        )}
        {currentSection === "versions" && (
          <VersionsSection key="versions" onComplete={() => goTo("upsdowns")} onBack={() => goTo("monkey")} />
        )}
        {currentSection === "upsdowns" && (
          <UpsDownsSection key="upsdowns" onComplete={() => goTo("growth")} onBack={() => goTo("versions")} />
        )}
        {currentSection === "growth" && (
          <GrowthSection key="growth" onComplete={() => goTo("collage")} onBack={() => goTo("upsdowns")} />
        )}
        {currentSection === "collage" && (
          <PhotoCollageSection key="collage" onComplete={() => goTo("birthday")} onBack={() => goTo("growth")} />
        )}
        {currentSection === "birthday" && (
          <BirthdayGiftSection key="birthday" onBack={() => goTo("collage")} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
