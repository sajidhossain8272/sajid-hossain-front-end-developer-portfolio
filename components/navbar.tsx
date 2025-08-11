"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDownload from "@/components/resume-download";
import { motion } from "framer-motion";

type NavLink = { href: string; label: string };

const LINKS: readonly NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#offer", label: "What I Offer" },
  { href: "#consultation", label: "Consultation" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  // initialize from current scroll to prevent flash
  const [scrolled, setScrolled] = useState<boolean>(
    () => (typeof window !== "undefined" ? window.scrollY > 8 : false)
  );
  const [open, setOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50",
        "border-b transition-colors duration-300",
        "backdrop-blur-xl",
        scrolled ? "bg-black/50 border-white/10" : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center md:justify-evenly justify-between">
        {/* Interactive Logo */}
        <Link href="#hero" className="group inline-flex items-center gap-2">
          <motion.span
            className="relative font-bold tracking-tight text-white text-lg"
            initial={false}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Sajid
            </span>
            <span className="text-white/60">.dev</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </motion.span>
          <motion.span
            className="text-white/70"
            whileHover={{ rotate: 25, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            aria-hidden="true"
          >
            <Sparkles size={16} />
          </motion.span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Resume button inline */}
          <ResumeDownload />

          {/* Book a Call (Calendly) */}
          <Button
            asChild
            className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
          >
            <a
              href="https://calendly.com/sajidhossain8272/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}

            <div className="pt-1">
              <ResumeDownload />
            </div>

            <Button
              asChild
              className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            >
              <a
                href="https://calendly.com/sajidhossain8272/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
