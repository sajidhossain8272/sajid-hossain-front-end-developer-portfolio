'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Zap, Shield, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'GrafiXr',
    tag: 'Digital Agency Portfolio',
    description: 'A sophisticated portfolio platform designed for creative agencies featuring custom admin panel, dynamic project management, and advanced SEO optimization with modern glassmorphism design.',
    stack: ['React.js', 'Next.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS', 'SEO'],
    liveUrl: 'https://grafixr.com',
    image: 'https://grafixr.com/og-image.png',
    icon: Sparkles,
    gradient: 'from-blue-500 to-purple-500',
    period: 'Mar 2025 – Aug 2025'
  },
  {
    title: 'Quick Convert',
    tag: 'Image Conversion Tool',
    description: 'A secure, privacy-first in-browser image conversion utility built with modern React architecture, focusing on performance, accessibility, and user experience with zero server dependency.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Web APIs'],
    liveUrl: 'https://quick-convert-img.vercel.app/',
    image: 'https://quick-convert-img.vercel.app/og-image.png',
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-500',
    period: 'Mar 2025'
  },
  {
    title: 'Airdrop Infinity',
    tag: 'Web3 Airdrop Tracker',
    description: 'A comprehensive crypto airdrop discovery platform with AI-powered content automation, real-time tracking, automated social media publishing, and advanced Web3 integrations.',
    stack: ['Web3', 'REST API', 'Gemini AI', 'Automation', 'MongoDB', 'n8n'],
    liveUrl: 'https://airdropinfinity.com',
    image: 'https://airdropinfinity.com/og-image.png',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-500',
    period: 'Nov 2024 – July 2025'
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Showcasing innovative solutions and cutting-edge web applications built with modern technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg?height=300&width=500'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Floating icon */}
                    <motion.div
                      className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-2xl`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      animate={{ 
                        boxShadow: [
                          "0 10px 30px rgba(0,0,0,0.3)",
                          "0 20px 40px rgba(0,0,0,0.4)",
                          "0 10px 30px rgba(0,0,0,0.3)"
                        ]
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Overlay buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          size="lg"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          View Live
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium`}>
                        {project.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>

                    <p className="text-white/80 text-sm mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs rounded-lg font-medium"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-2xl border-0`}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Live Site
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* View More Projects CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in seeing more projects?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              I have worked on 29+ projects for international clients with 100% satisfaction rate. Let's discuss your next project!
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg"
                onClick={() => window.open('https://www.fiverr.com/s/yv6D9mb', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Fiverr Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
