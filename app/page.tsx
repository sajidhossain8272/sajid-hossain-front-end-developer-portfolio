import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ConsultationSection from "@/components/consultation-section";
import ContactSection from "@/components/contact-section";
import FloatingChat from "@/components/floating-chat";
import ResumeDownload from "@/components/resume-download";

const baseUrl = "https://sajid-hossain-front-end-developer-p.vercel.app"; // Adjust if using a custom domain

export const metadata: Metadata = {
  title: "Sajid Hossain – Software Developer Portfolio",
  description:
    "Explore the portfolio of Sajid Hossain, a skilled Software Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Discover SaaS projects, modern web tools, and UI/UX mastery.",
  keywords:
    "Sajid Hossain, Software Developer, Front-end Developer, React Developer, Next.js, TypeScript, Tailwind CSS, Web Developer, SaaS, Portfolio, Web Design, UI Developer, JavaScript, Developer Portfolio",
  authors: [{ name: "Sajid Hossain" }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Sajid Hossain – Software Developer Portfolio",
    description:
      "Explore the work and expertise of Sajid Hossain, showcasing modern front-end projects, SaaS development, and UI/UX proficiency.",
    url: baseUrl,
    siteName: "Sajid Hossain Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sajid Hossain – Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajid Hossain – Software Developer Portfolio",
    description:
      "Explore the work and expertise of Sajid Hossain, showcasing modern Software projects, SaaS development, and UI/UX proficiency.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className='min-h-screen bg-black overflow-x-hidden'>
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 pointer-events-none select-none"></div>
      <div className='relative z-10'>
        <ResumeDownload />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ConsultationSection />
        <ContactSection />
        <FloatingChat />
      </div>
    </main>
  );
}
