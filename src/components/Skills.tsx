import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Brain, Settings, Zap, Globe, Cpu, Layers, TrendingUp, Sparkles, Bot, Laptop, Gauge, Target, Rocket, Shield, Star, Terminal } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreCompetencies = [
    {
      title: "AI/ML Development",
      icon: <Bot className="w-8 h-8" />,
      percentage: 95,
      gradient: "from-purple-500 to-blue-500",
      description: "Advanced machine learning algorithms, neural networks, and AI model deployment",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain", "Computer Vision"]
    },
    {
      title: "Python Development",
      icon: <Terminal className="w-8 h-8" />,
      percentage: 98,
      gradient: "from-green-500 to-emerald-500",
      description: "Expert-level Python programming with focus on data science and automation",
      technologies: ["Python", "Pandas", "NumPy", "Flask", "FastAPI", "Django", "Scikit-learn"]
    },
    {
      title: "Automation Systems",
      icon: <Zap className="w-8 h-8" />,
      percentage: 90,
      gradient: "from-yellow-500 to-orange-500",
      description: "Intelligent automation solutions and process optimization",
      technologies: ["RPA", "Workflow Automation", "API Integration", "Scripting", "CI/CD"]
    },
    {
      title: "Full Stack Development",
      icon: <Laptop className="w-8 h-8" />,
      percentage: 85,
      gradient: "from-blue-500 to-cyan-500",
      description: "End-to-end web application development with modern frameworks",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black text-gradient text-center mb-20"
        >
          Core Competencies
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="relative group"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${competency.gradient} p-0.5`}>
                <div className="w-full h-full glass rounded-3xl" />
              </div>
              
              <div className="relative p-8 rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        boxShadow: "0 15px 35px rgba(99, 102, 241, 0.4)"
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${competency.gradient} text-white shadow-lg relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10">{competency.icon}</div>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{competency.title}</h3>
                      <p className="text-muted-foreground text-sm max-w-md">{competency.description}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                      className="text-4xl font-black text-gradient mb-2"
                    >
                      {competency.percentage}%
                    </motion.div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(competency.percentage / 20) 
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                              : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency Level</span>
                    <span className="text-sm font-medium text-primary">{competency.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${competency.gradient} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${competency.percentage}%` } : {}}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.2 + 0.8,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: index * 0.2 + 1.5
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {competency.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 1.0 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                      }}
                      className="px-3 py-2 glass rounded-full text-sm cursor-pointer transition-all duration-200 relative overflow-hidden group"
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${competency.gradient} opacity-0 group-hover:opacity-10`}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-0.5">
              <div className="w-full h-full glass rounded-3xl" />
            </div>
            
            <div className="relative p-8 rounded-3xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <Target className="w-8 h-8" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-gradient mb-4">Always Learning & Evolving</h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                I'm passionate about staying current with emerging technologies and continuously expanding my skill set. 
                Currently exploring advanced AI architectures, cloud computing, and modern development frameworks to deliver 
                cutting-edge solutions that push the boundaries of what's possible.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {["Continuous Learning", "Innovation", "Problem Solving", "Adaptability"].map((value, index) => (
                  <motion.span
                    key={value}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 glass rounded-full text-sm font-medium cursor-pointer"
                  >
                    {value}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}