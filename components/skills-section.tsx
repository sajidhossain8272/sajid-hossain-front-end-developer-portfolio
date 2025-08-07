'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Server, Database, Globe, Zap } from 'lucide-react'

const skillsData = {
  frontend: {
    icon: Code,
    title: 'Frontend Development',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js']
  },
  styling: {
    icon: Palette,
    title: 'Design & Styling',
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Tailwind CSS', 'Figma', 'Responsive Design', 'UI/UX Design', 'Glassmorphism', 'CSS Animations']
  },
  backend: {
    icon: Server,
    title: 'Backend & APIs',
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Firebase', 'Supabase']
  },
  database: {
    icon: Database,
    title: 'Database & Cloud',
    gradient: 'from-orange-500 to-red-500',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Cloudinary', 'AWS S3']
  },
  tools: {
    icon: Zap,
    title: 'Tools & Performance',
    gradient: 'from-indigo-500 to-purple-500',
    skills: ['Git', 'Postman', 'Google Analytics', 'SEO Optimization', 'Web Performance', 'Webpack']
  },
  web3: {
    icon: Globe,
    title: 'Web3 & Automation',
    gradient: 'from-pink-500 to-rose-500',
    skills: ['Web3.js', 'Smart Contracts', 'n8n Automation', 'Gemini AI', 'Blockchain', 'DeFi']
  }
}

export default function SkillsSection() {
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
            Skills & Technologies
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
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([key, category], categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl h-full flex flex-col"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl mb-8 mx-auto shadow-2xl group-hover:shadow-3xl`}
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
                    <IconComponent className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <div className="flex-1 flex flex-col">
                    <motion.h3 
                      className="text-2xl font-bold text-white text-center mb-8 min-h-[4rem] flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <motion.div
                            className="px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 font-medium text-center cursor-default text-sm"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              y: -2
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white text-center mb-8"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Soft Skills & Expertise
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Attention to Detail', 'Problem Solving', 'User-Centered Design', 
                'Agile Collaboration', 'Time Management', 'Fast Learning', 
                'Remote Communication', 'Cross-Cultural Adaptability', 'Leadership',
                'Project Management', 'Client Relations', 'Technical Writing'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white/90 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
