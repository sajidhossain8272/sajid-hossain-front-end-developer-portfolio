"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  Clock,
  Award,
  Users,
  Code,
  Zap,
  Target,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  {
    icon: Code,
    label: "Projects",
    value: "29+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Users,
    label: "Clients",
    value: "25+",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Award,
    label: "Years",
    value: "2+",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Target,
    label: "Success",
    value: "100%",
    color: "from-orange-400 to-red-400",
  },
];

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section className='py-20 sm:py-32 relative'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-14 sm:mb-20'
        >
          <motion.h2
            className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6'
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className='w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'
            initial={{ width: 0 }}
            whileInView={{ width: isMobile ? 80 : 128 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-12 sm:mb-20'>
          {/* Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex justify-center'
          >
            <div className='relative'>
              {/* Glassmorphism Avatar Card (less intense on mobile) */}
              <motion.div
                className={`relative ${
                  isMobile
                    ? "w-52 h-52 p-2 rounded-2xl bg-white/5 border border-white/10 shadow-md"
                    : "w-96 h-96 p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
                }`}
                whileHover={isMobile ? {} : { scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-full h-full ${
                    isMobile ? "rounded-xl" : "rounded-2xl"
                  } flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20`}
                >
                  <motion.img
                    src='https://media.licdn.com/dms/image/v2/D5603AQEbrc9P2osCTA/profile-displayphoto-shrink_800_800/B56ZOn4bFkGkAc-/0/1733688408020?e=1757548800&v=beta&t=7k-ARUgVF7mQEoZfvrUvx9ErgrzU490v8ngn49FDVkQ'
                    alt='Sajid Hossain'
                    className='w-full h-full object-cover'
                    style={{ borderRadius: isMobile ? "0.75rem" : "1rem" }}
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {/* Floating Elements: desktop only */}
                {!isMobile && (
                  <>
                    <motion.div
                      className='absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl'
                      animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <span className='text-white text-2xl'>💻</span>
                    </motion.div>
                    <motion.div
                      className='absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-xl'
                      animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                      transition={{
                        y: { duration: 3, repeat: Infinity },
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      <span className='text-white text-lg'>⚡</span>
                    </motion.div>
                    <motion.div
                      className='absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg'
                      animate={{ x: [0, 10, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className='text-white text-sm'>🚀</span>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Bio + Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-7 sm:space-y-8'
          >
            <motion.div
              className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl`}
              whileHover={
                isMobile
                  ? {}
                  : {
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }
              }
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className='text-base sm:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Software Developer with{" "}
                <strong className='text-white'>2+ years</strong> delivering
                responsive, high-performance web apps using{" "}
                <strong className='text-blue-300'>React.js</strong>,{" "}
                <strong className='text-purple-300'>Next.js</strong>,{" "}
                <strong className='text-cyan-300'>TypeScript</strong>, and{" "}
                <strong className='text-emerald-300'>Tailwind CSS</strong>.
              </motion.p>
              <motion.p
                className='text-base sm:text-lg text-white/80 leading-relaxed'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Expert in APIs, performance, and UX. Led scalable front-end
                builds in agile, remote-first teams.
              </motion.p>
            </motion.div>

            {/* Location / Languages / Experience */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  color: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Globe,
                  label: "Languages",
                  value: "English, Bangla, Hindi",
                  color: "from-emerald-500/10 to-teal-500/10",
                  iconColor: "text-emerald-400",
                },
                {
                  icon: Clock,
                  label: "Experience",
                  value: "2+ years",
                  color: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-400",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className={`backdrop-blur-lg bg-gradient-to-br ${item.color} border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-xl`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={isMobile ? {} : { scale: 1.05, y: -5 }}
                  >
                    <div>
                      <IconComponent
                        className={`h-7 w-7 sm:h-8 sm:w-8 ${item.iconColor} mx-auto mb-1 sm:mb-3`}
                      />
                    </div>
                    <p className='font-semibold text-white mb-1'>
                      {item.label}
                    </p>
                    <p className='text-xs sm:text-sm text-white/70'>
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Section: simplified on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`grid ${
            isMobile ? "grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
          } gap-4 sm:gap-8`}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className={`${
                  isMobile
                    ? "bg-white/5 border border-white/10 rounded-2xl p-4 text-center shadow-sm"
                    : "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl group hidden md:block"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={isMobile ? {} : { scale: 1.05, y: -10 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 sm:w-20 sm:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6`}
                >
                  <IconComponent className='h-7 w-7 sm:h-10 sm:w-10 text-white' />
                </div>
                <h3 className='text-xl sm:text-4xl font-bold text-white mb-1 sm:mb-2'>
                  {stat.value}
                </h3>
                <p className='text-xs sm:text-base text-white/70 font-medium'>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
