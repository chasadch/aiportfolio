import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Bot, Mic, Leaf, Plane, Play, Code, Award, Zap, Cpu, Database, Globe, Sparkles, ArrowRight, Star, TrendingUp, Users, Clock } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      title: "AI Voice Agent",
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      description: "Engineered a voice-activated system using Python, Speech Recognition, and gTTS for seamless voice-based conversation with intelligent responses.",
      features: [
        "Core Functionality using Python, Speech Recognition, and gTTS",
        "Email Automation with vocal instructions",
        "Natural Language Processing with OpenAI's GPT API",
        "Web Integration with scraping and Google Search API"
      ],
      technologies: ["Python", "OpenAI GPT", "Speech Recognition", "gTTS", "Web Scraping"],
      status: "Completed",
      metrics: { accuracy: "95%", users: "1K+", performance: "Fast" },
      category: "AI/ML",
      year: "2024",
      complexity: "Advanced"
    },
    {
      title: "AI Interactive Portfolio",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      description: "Created a dynamic portfolio with AI-driven question answering, expressive gestures, and immersive engagement for recruiters.",
      features: [
        "AI-driven question answering with voice interaction",
        "Dynamic portfolio components with cross-device accessibility",
        "Context-aware responses and personalized recommendations"
      ],
      technologies: ["React", "AI/ML", "Voice Recognition", "Cross-platform"],
      status: "Ongoing",
      metrics: { engagement: "85%", response: "Real-time", devices: "All" },
      category: "Web Development",
      year: "2024",
      complexity: "Expert"
    },
    {
      title: "Plant Disease Detection",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-600",
      description: "AI-powered system for plant health maintenance through early disease detection and treatment recommendations.",
      features: [
        "TensorFlow and EfficientNet for deep learning detection",
        "Detailed prediction reports with symptoms and treatments",
        "90% classification accuracy across 38 disease classes"
      ],
      technologies: ["TensorFlow", "EfficientNet", "Flask", "Deep Learning", "Computer Vision"],
      status: "Completed",
      metrics: { accuracy: "90%", diseases: "38", speed: "2s" },
      category: "Computer Vision",
      year: "2023",
      complexity: "Advanced"
    },
    {
      title: "AI Autonomous Drone",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      description: "Advanced autonomous drone system combining hardware and software for reliable navigation and intelligent decision-making.",
      features: [
        "Hardware integration with Pixhawk, LiDAR, and sensors",
        "Computer vision for obstacle recognition and avoidance",
        "Real-time decision-making and path planning algorithms"
      ],
      technologies: ["Pixhawk", "Computer Vision", "LiDAR", "Path Planning", "Real-time Systems"],
      status: "Completed",
      metrics: { accuracy: "98%", range: "5km", uptime: "99%" },
      category: "Hardware AI",
      year: "2023",
      complexity: "Expert"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FEATURED PROJECTS
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are some of the selected projects that showcase my passion for AI/ML development and intelligent automation.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2
              }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Left side - Project image/preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 h-64 flex items-center justify-center relative overflow-hidden">
                  {/* Project preview placeholder */}
                  <div className="text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mx-auto"
                    >
                      {project.icon}
                    </motion.div>
                    <div className="text-white">
                      <p className="text-lg font-semibold">{project.title}</p>
                      <p className="text-sm text-gray-400">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Project details */}
              <div className="space-y-6">
                {/* Project title */}
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                
                {/* Project description */}
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project info */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">PROJECT INFO</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Year</span>
                      <p className="text-white">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Role</span>
                      <p className="text-white">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-colors"
                  >
                    LIVE DEMO
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    SEE ON GITHUB
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your next innovative project to life with cutting-edge AI solutions.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}