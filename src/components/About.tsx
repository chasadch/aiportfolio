import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Download, Linkedin, Github } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Title and Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
              ABOUT ME
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl font-semibold text-white">
                I am an AI/ML developer based in Pakistan. Has Computer Science background.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I am an AI/ML developer based in Pakistan looking for exciting opportunities. Has Computer Science background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, TensorFlow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing games. Learning more to improve skill.
              </p>
              
              {/* Action buttons */}
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-lime-300 transition-colors"
                >
                  DOWNLOAD RESUME
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden"
              >
                {/* Profile image placeholder */}
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 bg-lime-400 rounded-full flex items-center justify-center mx-auto"
                  >
                    <Brain className="w-16 h-16 text-black" />
                  </motion.div>
                  <div className="text-white">
                    <p className="text-xl font-semibold">Muhammad Asad Arshad</p>
                    <p className="text-sm text-gray-400">AI/ML Developer</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-4 h-4 bg-lime-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}