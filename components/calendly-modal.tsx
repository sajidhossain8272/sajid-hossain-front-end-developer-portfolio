'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Video } from 'lucide-react'
import { useEffect } from 'react'

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      // Load Calendly widget
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl w-full max-w-5xl h-[90vh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Book a Free Consultation</h2>
                <p className="text-white/70">Let's discuss your project and how I can help</p>
              </div>
              <motion.button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>
            
            {/* Calendly Widget */}
            <div className="h-full p-4">
              <div 
                className="calendly-inline-widget h-full rounded-2xl overflow-hidden" 
                data-url="https://calendly.com/sajidhossain8272/30min"
                style={{ minWidth: '320px', height: '100%' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
