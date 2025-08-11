"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Above the fold
import HeroSection from "@/components/hero-section";
import ResumeDownload from "@/components/resume-download";
import FloatingChat from "@/components/floating-chat";
import WhatIOfferSection from "@/components/hire-me";

// Lazy loaded
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
  () => import("@/components/skills-section").then((m) => m.SoftSkillsSection),
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
      
      <Navbar />

      {/* Faint texture */}
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 pointer-events-none select-none"></div>

      <div className='relative z-10'>
        <section id='hero' className='scroll-mt-24'>
          <HeroSection />
        </section>
        <section id='about' className='scroll-mt-24'>
          <AboutSection />
        </section>
        <section id='projects' className='scroll-mt-24'>
          <ProjectsSection />
        </section>
        <section id='skills' className='scroll-mt-24'>
          <SkillsSection />
          <SoftSkillsSection />
        </section>
        <section id='experience' className='scroll-mt-24'>
          <ExperienceSection />
        </section>
        <section id='offer' className='scroll-mt-24'>
          <WhatIOfferSection />
        </section>
        <section id='consultation' className='scroll-mt-24'>
          <ConsultationSection />
        </section>
        <section id='contact' className='scroll-mt-24'>
          <ContactSection />
        </section>

        <FloatingChat />
        <Footer />
      </div>
    </main>
  );
}
