'use client'

import { motion } from 'framer-motion'
// import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ResumeDownload() {
  const handleDownload = () => {
    window.open('https://sajid-hossain-resume.vercel.app/', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-6 right-6 z-50"
    >
      <motion.div 
        whileHover={{ scale: 1.05, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          size="sm"
          className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-2xl rounded-2xl px-6 py-3 font-semibold"
          onClick={handleDownload}
        >
          {/* <Download className="h-4 w-4 mr-2" /> */}
          Resume
        </Button>
      </motion.div>
    </motion.div>
  )
}
