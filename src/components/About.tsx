import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Calendar, Award, Target, Lightbulb, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const stats = [
    { icon: <Target className="w-6 h-6" />, value: "15+", label: "Projects Completed", color: "from-primary to-primary/60" },
    { icon: <Award className="w-6 h-6" />, value: "90%", label: "Model Accuracy", color: "from-secondary to-secondary/60" },
    { icon: <Lightbulb className="w-6 h-6" />, value: "4+", label: "AI Specializations", color: "from-accent to-accent/60" },
    { icon: <Users className="w-6 h-6" />, value: "2+", label: "Years Experience", color: "from-chart-4 to-chart-4/60" },
  ];

  const skills = [
    { name: "AI/ML Development", level: 95, icon: "🤖" },
    { name: "Python Development", level: 98, icon: "🐍" },
    { name: "Automation Systems", level: 90, icon: "⚡" },
    { name: "Full Stack Development", level: 85, icon: "💻" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl md:text-7xl font-black text-gradient mb-6"
              style={{ rotateX }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                }}
                className={`glass p-6 rounded-2xl text-center relative overflow-hidden group`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4"
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl font-black text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-3xl">
                <motion.p 
                  className="text-xl leading-relaxed text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  I'm a passionate{" "}
                  <span className="text-primary font-semibold">Computer Science graduate</span>{" "}
                  with deep expertise in Python, AI/ML model development, and automation pipelines. 
                  My journey involves crafting{" "}
                  <span className="text-secondary font-semibold">intelligent AI agents</span>{" "}
                  and interactive systems that deliver scalable, context-aware solutions.
                </motion.p>

                {/* Info items */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="space-y-4"
                >
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: "Based in Islamabad, Pakistan" },
                    { icon: <Calendar className="w-5 h-5" />, text: "Bachelor's in Computer Science (2024)" },
                    { icon: <Award className="w-5 h-5" />, text: "Specialized in AI/ML & Automation" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg text-primary">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-8"
            >
              <div className="glass p-8 rounded-3xl">
                <motion.h3 
                  className="text-2xl font-bold mb-8 text-gradient"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Core Competencies
                </motion.h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.2, delay: 1.6 + index * 0.1 }}
                          >
                            <motion.div
                              className="absolute right-0 top-0 w-2 h-full bg-white/50 rounded-full"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl border-l-4 border-primary"
              >
                <p className="text-lg italic text-muted-foreground mb-3">
                  "Innovation distinguishes between a leader and a follower."
                </p>
                <p className="text-sm font-semibold text-primary">- Steve Jobs</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}