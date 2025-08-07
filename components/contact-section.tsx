'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sajidhossain8272@gmail.com',
    href: 'mailto:sajidhossain8272@gmail.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+8801329530468',
    href: 'tel:+8801329530468',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'brokephilanthropist',
    href: 'https://linkedin.com/in/brokephilanthropist',
    gradient: 'from-indigo-500 to-blue-500'
  }
]

export default function ContactSection() {
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
            Let's Connect
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
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl h-full"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-6">
                    <motion.div
                      className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl shadow-2xl group-hover:shadow-3xl`}
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
                    <div className="flex-1">
                      <p className="font-bold text-white text-lg mb-1 group-hover:text-blue-100 transition-colors duration-200">{contact.label}</p>
                      {contact.href ? (
                        <motion.a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white/80 hover:text-white transition-colors duration-200 text-lg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {contact.value}
                        </motion.a>
                      ) : (
                        <p className="text-white/80 text-lg">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Quick Chat Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl text-center"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 4, repeat: Infinity }
              }}
            >
              <MessageCircle className="h-16 w-16 text-blue-400 mx-auto" />
            </motion.div>
            
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prefer Direct Chat?
            </motion.h3>
            <motion.p 
              className="text-white/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm just a message away! Choose your preferred platform for instant communication.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl border-0"
                  onClick={() => window.open('https://wa.me/8801329530468', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl border-0"
                  onClick={() => window.open('https://linkedin.com/in/brokephilanthropist', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
