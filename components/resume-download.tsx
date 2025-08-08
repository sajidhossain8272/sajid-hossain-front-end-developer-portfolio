"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile"; // import your hook!

export default function ResumeDownload() {
  const isMobile = useIsMobile();

  const handleDownload = () => {
    window.open("https://sajid-hossain-resume.vercel.app/", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className='fixed top-6 right-6 z-50 print:hidden'
      style={isMobile ? { top: 12, right: 12 } : undefined}
    >
      <motion.div
        whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          size={isMobile ? "default" : "sm"}
          className={`bg-white/10 ${
            isMobile ? "px-7 py-4 text-base" : "px-6 py-3"
          } 
            backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 
            shadow-2xl rounded-2xl font-semibold outline-none focus-visible:ring-4 focus-visible:ring-blue-400`}
          onClick={handleDownload}
          aria-label='Download Resume'
        >
          Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}
