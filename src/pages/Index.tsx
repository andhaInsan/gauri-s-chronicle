import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CatBirthdaySection from "@/components/CatBirthdaySection";
import MonkeyMemeSection from "@/components/MonkeyMemeSection";
import VersionsSection from "@/components/VersionsSection";
import VideoCallsSection from "@/components/VideoCallsSection";
import UpsDownsSection from "@/components/UpsDownsSection";
import GrowthSection from "@/components/GrowthSection";
import BirthdayGiftSection from "@/components/BirthdayGiftSection";

const sections = [
  "cat",
  "monkey",
  "versions",
  "videocalls",
  "upsdowns",
  "growth",
  "birthday",
] as const;

type Section = (typeof sections)[number];

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("cat");

  const goTo = (section: Section) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentSection === "cat" && (
          <CatBirthdaySection key="cat" onComplete={() => goTo("monkey")} />
        )}
        {currentSection === "monkey" && (
          <MonkeyMemeSection key="monkey" onComplete={() => goTo("versions")} />
        )}
        {currentSection === "versions" && (
          <VersionsSection key="versions" onComplete={() => goTo("videocalls")} />
        )}
        {currentSection === "videocalls" && (
          <VideoCallsSection key="videocalls" onComplete={() => goTo("upsdowns")} />
        )}
        {currentSection === "upsdowns" && (
          <UpsDownsSection key="upsdowns" onComplete={() => goTo("growth")} />
        )}
        {currentSection === "growth" && (
          <GrowthSection key="growth" onComplete={() => goTo("birthday")} />
        )}
        {currentSection === "birthday" && <BirthdayGiftSection key="birthday" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
