'use client'

import { motion } from 'framer-motion'
import { MapPin, Globe, Clock, Award, Users, Code, Zap, Target } from 'lucide-react'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '29+', color: 'from-blue-400 to-cyan-400' },
  { icon: Users, label: 'Happy Clients', value: '25+', color: 'from-purple-400 to-pink-400' },
  { icon: Award, label: 'Years Experience', value: '2+', color: 'from-emerald-400 to-teal-400' },
  { icon: Target, label: 'Success Rate', value: '100%', color: 'from-orange-400 to-red-400' },
]

export default function AboutSection() {
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Enhanced glassmorphism avatar container */}
              <motion.div 
                className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://media.licdn.com/dms/image/v2/D5603AQEbrc9P2osCTA/profile-displayphoto-shrink_800_800/B56ZOn4bFkGkAc-/0/1733688408020?e=1757548800&v=beta&t=7k-ARUgVF7mQEoZfvrUvx9ErgrzU490v8ngn49FDVkQ"
                    alt="Sajid Hossain"
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <span className="text-white text-2xl">💻</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <span className="text-white text-lg">⚡</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-white text-sm">🚀</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-lg text-white/80 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Front-End Developer with <strong className="text-white">2+ years of experience</strong> delivering responsive, 
                high-performance web applications using <strong className="text-blue-300">React.js</strong>, 
                <strong className="text-purple-300"> Next.js</strong>, <strong className="text-cyan-300">TypeScript</strong>, 
                and <strong className="text-emerald-300">Tailwind CSS</strong>.
              </motion.p>
              
              <motion.p 
                className="text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Expert in integrating APIs, optimizing performance, and elevating user experience across cross-functional teams. 
                Successfully led scalable, maintainable front-end builds in agile, remote-first teams.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', color: 'from-blue-500/10 to-cyan-500/10', iconColor: 'text-blue-400' },
                { icon: Globe, label: 'Languages', value: 'English, Bangla, Hindi', color: 'from-emerald-500/10 to-teal-500/10', iconColor: 'text-emerald-400' },
                { icon: Clock, label: 'Experience', value: '2+ years', color: 'from-purple-500/10 to-pink-500/10', iconColor: 'text-purple-400' }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.label}
                    className={`backdrop-blur-xl bg-gradient-to-br ${item.color} border border-white/10 rounded-2xl p-6 text-center shadow-xl`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <IconComponent className={`h-8 w-8 ${item.iconColor} mx-auto mb-3`} />
                    </motion.div>
                    <p className="font-semibold text-white mb-1">{item.label}</p>
                    <p className="text-sm text-white/70">{item.value}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 shadow-2xl group-hover:shadow-3xl`}
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
                  <IconComponent className="h-10 w-10 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2 + 0.3 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
