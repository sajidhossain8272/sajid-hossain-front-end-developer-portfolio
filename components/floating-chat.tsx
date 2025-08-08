"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useIsMobile(); // 👈

  useEffect(() => {
    const handleScroll = () => {
      const width = window.innerWidth;

      const scrollThreshold = width >= 1024 ? 1000 : 1650; // lg breakpoint: 1024px

      if (!hasScrolled && window.scrollY > scrollThreshold) {
        setIsOpen(true);
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div className='fixed bottom-8 right-8 z-50'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            // 👇 Mobile: No blur, less shadow. Desktop: Keep original.
            className={`mb-4 
              ${
                isMobile
                  ? "bg-gray-950 border border-white/20 rounded-2xl shadow-md p-4 w-72"
                  : "backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 w-80"
              }`}
            style={isMobile ? { willChange: "transform,opacity" } : undefined}
          >
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-3'>
                <motion.div
                  className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className='text-white text-lg'>👋</span>
                </motion.div>
                <div>
                  <h3 className='font-bold text-white'>Chat with Sajid</h3>
                  <div className='flex items-center gap-2'>
                    <motion.div
                      className='w-2 h-2 bg-green-500 rounded-full'
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <p className='text-white/60 text-xs'>
                      Usually replies instantly
                    </p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          relative 
          bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 
          text-white rounded-full 
          ${isMobile ? "p-3 shadow-md" : "p-4 shadow-2xl"}
        `}
                whileHover={isMobile ? {} : { scale: 1.1, y: -2 }}
                whileTap={isMobile ? {} : { scale: 0.9 }}
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulse animation: simpler for mobile */}
                <motion.div
                  className='absolute inset-0 rounded-full'
                  style={{
                    background:
                      "radial-gradient(circle,rgba(59,130,246,0.22)_0%,transparent_80%)",
                  }}
                  animate={
                    isMobile
                      ? { scale: [1, 1.14, 1], opacity: [0.4, 0.7, 0.4] }
                      : { scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }
                  }
                  transition={{
                    duration: isMobile ? 2 : 1.5,
                    repeat: Infinity,
                  }}
                />

                {isOpen ? (
                  <X className='h-6 w-6 relative z-10' />
                ) : (
                  <MessageCircle className='h-6 w-6 relative z-10' />
                )}

                {/* Green dot: smaller and less shadow on mobile */}
                {!isOpen && (
                  <motion.div
                    className={`
              absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white 
              ${isMobile ? "shadow" : "shadow-lg"}
            `}
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: isMobile
                        ? undefined
                        : [
                            "0 0 0 0 rgba(34, 197, 94, 0.7)",
                            "0 0 0 10px rgba(34, 197, 94, 0)",
                            "0 0 0 0 rgba(34, 197, 94, 0.7)",
                          ],
                    }}
                    transition={{ duration: 1.7, repeat: Infinity }}
                  />
                )}
              </motion.button>
            </div>

            <motion.p
              className='text-sm text-white/80 mb-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi! 👋 I'm available for quick questions or project discussions.
              Choose your preferred platform:
            </motion.p>

            <div className='space-y-3'>
              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white justify-start rounded-2xl py-3 font-semibold shadow-lg'
                  onClick={() => {
                    window.open("https://wa.me/8801329530468", "_blank");
                    setIsOpen(false);
                  }}
                >
                  💬 WhatsApp
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant='outline'
                  className='w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 justify-start rounded-2xl py-3 font-semibold shadow-lg'
                  onClick={() => {
                    window.open(
                      "https://linkedin.com/in/brokephilanthropist",
                      "_blank"
                    );
                    setIsOpen(false);
                  }}
                >
                  💼 LinkedIn
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl'
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Pulse animation */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {isOpen ? (
          <X className='h-6 w-6 relative z-10' />
        ) : (
          <MessageCircle className='h-6 w-6 relative z-10' />
        )}

        {!isOpen && (
          <motion.div
            className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg'
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                "0 0 0 10px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
}
