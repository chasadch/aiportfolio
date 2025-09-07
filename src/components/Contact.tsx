import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "asadarshad.471@gmail.com",
      href: "mailto:asadarshad.471@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "0345119280",
      href: "tel:+92345119280"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Pakistan",
      href: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/asad-arshad",
      href: "https://linkedin.com/in/asad-arshad"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/chasadch",
      href: "https://github.com/chasadch"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
              LET'S CONNECT
            </h2>
            
            <div className="space-y-4">
              <p className="text-white text-lg">
                Say hello at <span className="text-lime-400">asadarshad.471@gmail.com</span>
              </p>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-block text-lime-400 hover:text-lime-300 transition-colors"
              >
                For more info, here's my resume
              </motion.a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-6">
              {contactInfo.slice(3).map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">SUBMIT</span>
                <motion.div
                  whileHover={{ x: 3, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Send className="w-4 h-4" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}