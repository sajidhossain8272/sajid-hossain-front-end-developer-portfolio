"use client";

import dynamic from "next/dynamic";

// Above the fold: import normally
import HeroSection from "@/components/hero-section";
import ResumeDownload from "@/components/resume-download";
import FloatingChat from "@/components/floating-chat";
import WhatIOfferSection from "@/components/hire-me";

// Below the fold: lazy load
const AboutSection = dynamic(() => import("@/components/about-section"), {
  ssr: false,
});
const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  ssr: false,
});
const SkillsSection = dynamic(() => import("@/components/skills-section"), {
  ssr: false,
});
const SoftSkillsSection = dynamic(
  () =>
    import("@/components/skills-section").then((mod) => mod.SoftSkillsSection),
  { ssr: false }
);
const ExperienceSection = dynamic(
  () => import("@/components/experience-section"),
  { ssr: false }
);
const ConsultationSection = dynamic(
  () => import("@/components/consultation-section"),
  { ssr: false }
);
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
});


export default function HomeClient() {
  return (
    <main className='min-h-screen bg-black overflow-x-hidden'>
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 pointer-events-none select-none"></div>
      <div className='relative z-10'>
        <ResumeDownload />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <SoftSkillsSection />
        <WhatIOfferSection />
        <ExperienceSection />
        <ConsultationSection />
        <ContactSection />
        <FloatingChat />
      </div>
    </main>
  );
}
