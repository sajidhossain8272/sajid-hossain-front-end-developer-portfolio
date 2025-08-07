'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, ExternalLink, Award, TrendingUp, Users } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Panorama Management Advisory Services',
    type: 'Hybrid',
    period: 'Oct 2024 – Present',
    website: 'https://panoramamas.com',
    gradient: 'from-blue-500 to-purple-500',
    achievements: [
      'Built scalable, responsive interfaces using React.js, Next.js, and Tailwind CSS',
      'Integrated MongoDB and REST APIs for dynamic content management',
      'Applied SEO best practices and Google Analytics for performance insights',
      'Led front-end UI/UX enhancements focusing on accessibility and performance'
    ]
  },
  {
    title: 'Software Associate',
    company: 'Panorama Management Advisory Services',
    type: 'Hybrid',
    period: 'Mar 2024 – Oct 2024',
    website: 'https://panoramamas.com',
    gradient: 'from-emerald-500 to-teal-500',
    achievements: [
      'Executed QA testing and bug tracking for major front-end components',
      'Documented bugs, created test cases, and collaborated closely with developers',
      'Authored standard operating procedures (SOPs) and version documentation',
      'Analyzed performance using Gmetrix and Google Analytics'
    ]
  },
  {
    title: 'Freelance Front-End Support',
    company: 'Fiverr',
    type: 'Remote',
    period: 'Jul 2023 – Present',
    website: 'https://www.fiverr.com/s/yv6D9mb',
    gradient: 'from-purple-500 to-pink-500',
    achievements: [
      'Completed 29+ projects for international clients focused on UI/UX fixes',
      'Built small components and optimized front-end performance',
      'Delivered high client satisfaction, earning consistent 5-star ratings',
      'Upgraded to Level 1 Seller status with excellent client feedback'
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
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
            Professional Journey
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
            Building exceptional digital experiences across diverse projects and teams
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Enhanced Timeline Dot */}
              <motion.div
                className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm`}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.3 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 30px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
              >
                <motion.div
                  className="absolute inset-1 bg-white rounded-full"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Enhanced Content Card */}
              <motion.div
                className="ml-20 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl group"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <div className="flex items-center gap-3 text-white/80">
                      <Building className="h-5 w-5" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60">{exp.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <motion.a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-xl text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                <div className="grid gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + achIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group/achievement"
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    >
                      <motion.div
                        className={`w-3 h-3 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.3)",
                            "0 0 20px rgba(147, 51, 234, 0.3)",
                            "0 0 10px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                      />
                      <span className="text-white/90 leading-relaxed group-hover/achievement:text-white transition-colors duration-200">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 "
        >
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: TrendingUp, label: 'Years Experience', value: '2+', gradient: 'from-blue-500 to-purple-500' },
                { icon: Award, label: 'Projects Completed', value: '29+', gradient: 'from-emerald-500 to-teal-500' },
                { icon: Users, label: 'Client Satisfaction', value: '100%', gradient: 'from-purple-500 to-pink-500' }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mx-auto mb-4 shadow-2xl group-hover:shadow-3xl`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      animate={{ 
                        boxShadow: [
                          "0 10px 30px rgba(0,0,0,0.3)",
                          "0 20px 40px rgba(0,0,0,0.4)",
                          "0 10px 30px rgba(0,0,0,0.3)"
                        ]
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        delay: index * 0.1 + 0.3 
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-white/70 font-medium">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
