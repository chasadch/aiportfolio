import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    "HTML", "CSS", "JAVASCRIPT", "JQUERY",
    "ACCESSIBILITY", "FIGMA", "TAILWIND CSS", "REACT",
    "PYTHON", "TENSORFLOW", "PYTORCH", "OPENAI",
    "MACHINE LEARNING", "AI/ML", "AUTOMATION", "FLASK"
  ];

  return (
    <section id="capabilities" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
              MY CAPABILITIES
            </h2>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-gray-300 leading-relaxed">
              I am always looking to add more skills. Continuously learning and expanding my expertise in cutting-edge technologies to deliver innovative solutions and stay ahead in the rapidly evolving tech landscape.
            </p>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {capabilities.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + index * 0.05 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(163, 230, 53, 0.1)",
                    borderColor: "rgb(163, 230, 53)"
                  }}
                  className="px-4 py-2 border border-gray-600 rounded-full text-sm font-medium text-white hover:text-lime-400 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
