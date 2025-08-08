"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile"; // Add your isMobile hook

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sajidhossain8272@gmail.com",
    href: "mailto:sajidhossain8272@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801329530468",
    href: "tel:+8801329530468",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "brokephilanthropist",
    href: "https://linkedin.com/in/brokephilanthropist",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function ContactSection() {
  const isMobile = useIsMobile();

  return (
    <section className={isMobile ? "py-14 relative" : "py-32 relative"}>
      <div className='max-w-6xl mx-auto px-2 sm:px-4'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-20'
        >
          <motion.h2
            className={`font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-6 ${
              isMobile ? "text-2xl" : "text-5xl md:text-6xl"
            }`}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-3 sm:mb-6`}
            style={{ width: isMobile ? 56 : 128 }}
          />
          <motion.p
            className={`text-white/70 mx-auto ${
              isMobile ? "text-base max-w-sm" : "text-xl max-w-3xl"
            }`}
          >
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <div
          className={
            isMobile
              ? "grid grid-cols-1 gap-4 mb-8"
              : "grid md:grid-cols-2 gap-8 mb-16"
          }
        >
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                viewport={{ once: true }}
                className={`
                  group 
                  ${
                    isMobile
                      ? "backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 shadow-md h-full"
                      : "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl h-full"
                  }
                `}
              >
                <div className='flex items-center gap-4'>
                  <div
                    className={`flex items-center justify-center 
                    ${isMobile ? "w-10 h-10" : "w-16 h-16"}
                    bg-gradient-to-r ${contact.gradient} 
                    rounded-lg sm:rounded-2xl shadow`}
                  >
                    <IconComponent
                      className={isMobile ? "h-5 w-5" : "h-8 w-8 text-white"}
                    />
                  </div>
                  <div className='flex-1'>
                    <p
                      className={`font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-200 ${
                        isMobile ? "text-base" : "text-lg"
                      }`}
                    >
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`${
                          isMobile
                            ? "text-white/80 text-sm"
                            : "text-white/80 text-lg"
                        } hover:text-white transition-colors duration-200 break-all`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p
                        className={
                          isMobile
                            ? "text-white/80 text-sm"
                            : "text-white/80 text-lg"
                        }
                      >
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Chat Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div
            className={`text-center mx-auto 
              ${
                isMobile
                  ? "backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 shadow-md"
                  : "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl"
              }`}
          >
            <div className='mb-5 sm:mb-6 flex justify-center'>
              <MessageCircle
                className={
                  isMobile
                    ? "h-10 w-10 text-blue-400"
                    : "h-16 w-16 text-blue-400"
                }
              />
            </div>

            <h3
              className={
                isMobile
                  ? "text-xl font-bold text-white mb-2"
                  : "text-3xl font-bold text-white mb-4"
              }
            >
              Prefer Direct Chat?
            </h3>
            <p
              className={`${
                isMobile
                  ? "text-white/70 mb-5 text-sm"
                  : "text-white/70 mb-8 max-w-2xl mx-auto"
              }`}
            >
              I'm just a message away! Choose your preferred platform for
              instant communication.
            </p>

            <div
              className={
                isMobile
                  ? "flex flex-col gap-3"
                  : "flex flex-row gap-4 justify-center"
              }
            >
              <Button
                size={isMobile ? "sm" : "lg"}
                className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-2xl shadow-lg border-0'
                onClick={() =>
                  window.open("https://wa.me/8801329530468", "_blank")
                }
              >
                <MessageCircle className='mr-2 h-5 w-5' />
                WhatsApp Chat
              </Button>
              <Button
                size={isMobile ? "sm" : "lg"}
                className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-2xl shadow-lg border-0'
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/brokephilanthropist",
                    "_blank"
                  )
                }
              >
                <Linkedin className='mr-2 h-5 w-5' />
                LinkedIn Message
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
