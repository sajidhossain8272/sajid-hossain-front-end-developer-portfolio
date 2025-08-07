"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Sparkles, ArrowDown } from "lucide-react";
import CalendlyModal from "./calendly-modal";

const techStack = [
  { name: "React", logo: "⚛️" },
  { name: "Next.js", logo: "▲" },
  { name: "TypeScript", logo: "TS" },
  { name: "Tailwind CSS", logo: "🎨" },
  { name: "Node.js", logo: "🟢" },
  { name: "MongoDB", logo: "🍃" },
  { name: "JavaScript", logo: "JS" },
  { name: "Firebase", logo: "🔥" },
];

export default function HeroSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // For mouse-following glow
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Glow follows mouse position
  const glowX = useTransform(mouseX, (x) => `${x}px`);
  const glowY = useTransform(mouseY, (y) => `${y}px`);

  const [glowIndex, setGlowIndex] = useState(0);

  // Animate glow to next tech every 900ms (adjust as you wish)
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % techStack.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const techGlows = [
    "0 0 18px 2px #61dafb, 0 0 34px 10px #00d8ff", // React: cyan/blue
    "0 0 18px 2px #000000, 0 0 34px 10px #ffffff", // Next.js: black/white
    "0 0 18px 2px #3178c6, 0 0 34px 10px #007acc", // TS: blue
    "0 0 18px 2px #38bdf8, 0 0 34px 10px #06b6d4", // Tailwind: cyan/teal
    "0 0 18px 2px #3c873a, 0 0 34px 10px #8cc84b", // Node: green
    "0 0 18px 2px #13aa52, 0 0 34px 10px #00ed64", // MongoDB: green
    "0 0 18px 2px #f7df1e, 0 0 34px 10px #ffd600", // JS: yellow
    "0 0 18px 2px #ffca28, 0 0 34px 10px #ff9800", // Firebase: orange
  ];

  return (
<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 pb-16 sm:pt-24 sm:pb-16'>
      {/* Animated Background Orbs */}
      <div className='absolute inset-0 pointer-events-none select-none z-0'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/25 to-cyan-400/30 rounded-full blur-3xl'
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/30 rounded-full blur-3xl'
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-400/20 rounded-full blur-2xl'
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -60, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-orange-400/20 to-red-400/25 rounded-full blur-2xl'
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Optional: animated grid overlay for more depth */}
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px)] [background-size:32px_32px] opacity-30' />
      </div>

      {/* Main Card (Futuristic Panel) */}
  <div className="relative z-10 text-center w-full max-w-3xl mx-auto md:max-w-6xl">
    <motion.div
      ref={cardRef}
      className="
        group relative mx-auto
        bg-[#13131a]/95
        border-2 border-[#2323f6]/30
        rounded-3xl
        flex flex-col items-center
        px-6 sm:px-12
        py-10 sm:py-16
        shadow-[0_4px_32px_0_rgba(44,225,255,0.11)]
        text-white
        overflow-visible
        transition-all duration-300
      "
          style={{}}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Magic Glow Effect */}
          <motion.div
            style={{
              left: glowX,
              top: glowY,
              opacity: 0.23,
              pointerEvents: "none",
              // Edit colors here!
              background:
                "radial-gradient(600px 220px at center, #f472b6cc 0%, #3b82f6aa 60%, transparent 100%)",
            }}
            className='absolute -z-10 rounded-3xl w-[520px] h-[220px] -translate-x-1/2 -translate-y-1/2 blur-2xl transition-all duration-500'
            animate={{ opacity: [0.16, 0.32, 0.23] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Animated Neon Border on Hover */}
          <motion.div
            className='absolute inset-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-[#18b6f6] group-hover:shadow-[0_0_32px_0_rgba(44,225,255,0.31)] transition-all duration-300'
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            animate={{ opacity: 0 }}
          />

          {/* Floating sparkles */}
          <motion.div
            className='absolute -top-4 right-2 sm:-top-6 sm:-right-6 text-yellow-300 z-50'
            animate={{
              rotate: 360,
              scale: [1, 1.18, 1],
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className='h-9 w-9' />
          </motion.div>
          <motion.div
            className='absolute -top-2 left-2 sm:-top-4 sm:-left-4 text-blue-400'
            animate={{
              rotate: -360,
              scale: [1, 1.28, 1],
              x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles className='h-8 w-8' />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className='mb-8'
          >
            <span
              className='inline-block px-6 py-2 sm:px-7 sm:py-2.5 bg-gradient-to-r from-blue-500/25 to-purple-500/25 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-base sm:text-lg font-medium shadow'
              tabIndex={0}
            >
              ✨ Available for new projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className='text-5xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-5 leading-[1.11] drop-shadow'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Sajid Hossain
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl text-white/90 font-semibold mb-6 tracking-tight'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            Software Developer
          </motion.h2>

          {/* Bio */}
          <motion.p
            className='text-lg sm:text-2xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-normal leading-relaxed'
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className='font-semibold text-white'>
              Crafting exceptional digital experiences with React, Next.js,
              TypeScript
            </span>{" "}
            and the modern web.
            <br className='hidden sm:inline' />
            <span className='text-white/70'>
              SaaS specialist & Web3 enthusiast.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-6 justify-center mb-14 w-full'
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size='lg'
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg focus-visible:ring-4 focus-visible:ring-blue-400 transition'
              onClick={() =>
                window.open(
                  "https://sajid-hossain-resume.vercel.app/",
                  "_blank"
                )
              }
              aria-label='Download Resume'
            >
              View Resume
            </Button>
            <Button
              size='lg'
              className='bg-white/10 border border-white/20 text-white hover:bg-white/20 px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg focus-visible:ring-4 focus-visible:ring-purple-400 transition'
              onClick={() => setIsCalendlyOpen(true)}
              aria-label='Book Free Consultation'
            >
              <Calendar className='mr-3 h-6 w-6' />
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Tech Stack */}

          <motion.div
            className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white opacity-70 text-sm select-none flex items-center justify-center gap-2 pointer-events-none'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden='true'
          >
            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2'>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className='h-5 w-5' />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
            <motion.div
      className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.3 }}
      aria-label="Tech Stack"
    >
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="group relative"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.09 }}
          whileHover={{
            scale: 1.09,
            y: -8,
            transition: { duration: 0.22 }
          }}
          tabIndex={0}
        >
          <span className="flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 rounded-2xl text-white/90 font-medium shadow hover:shadow-xl text-base sm:text-lg transition">
            <span className="text-2xl">{tech.logo}</span>
            <span>{tech.name}</span>
          </span>
          {/* Neon Glow on Hover */}
          <motion.span
            className="absolute inset-0 rounded-2xl pointer-events-none transition"
            style={{
              boxShadow: techGlows[index],
              opacity: glowIndex === index ? 0.7 : 0,
            }}
            aria-hidden="true"
          />
        </motion.div>
      ))}
    </motion.div>

      </div>

      <AnimatePresence>
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
        />
      </AnimatePresence>
    </section>
  );
}
