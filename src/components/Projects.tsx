import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Bot, Mic, Leaf, Plane, Play, Code, Award } from "lucide-react";

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
      metrics: { accuracy: "95%", users: "1K+", performance: "Fast" }
    },
    {
      title: "AI Interactive Portfolio",
      icon: <Mic className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      description: "Created a dynamic portfolio with AI-driven question answering, expressive gestures, and immersive engagement for recruiters.",
      features: [
        "AI-driven question answering with voice interaction",
        "Dynamic portfolio components with cross-device accessibility",
        "Context-aware responses and personalized recommendations"
      ],
      technologies: ["React", "AI/ML", "Voice Recognition", "Cross-platform"],
      status: "Ongoing",
      metrics: { engagement: "85%", response: "Real-time", devices: "All" }
    },
    {
      title: "Plant Disease Detection",
      icon: <Leaf className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-600",
      description: "AI-powered system for plant health maintenance through early disease detection and treatment recommendations.",
      features: [
        "TensorFlow and EfficientNet for deep learning detection",
        "Detailed prediction reports with symptoms and treatments",
        "90% classification accuracy across 38 disease classes"
      ],
      technologies: ["TensorFlow", "EfficientNet", "Flask", "Deep Learning", "Computer Vision"],
      status: "Completed",
      metrics: { accuracy: "90%", diseases: "38", speed: "2s" }
    },
    {
      title: "AI Autonomous Drone",
      icon: <Plane className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      description: "Advanced autonomous drone system combining hardware and software for reliable navigation and intelligent decision-making.",
      features: [
        "Hardware integration with Pixhawk, LiDAR, and sensors",
        "Computer vision for obstacle recognition and avoidance",
        "Real-time decision-making and path planning algorithms"
      ],
      technologies: ["Pixhawk", "Computer Vision", "LiDAR", "Path Planning", "Real-time Systems"],
      status: "Completed",
      metrics: { accuracy: "98%", range: "5km", uptime: "99%" }
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
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-black text-gradient mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of innovative AI/ML solutions that push the boundaries of technology and user experience
          </motion.p>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              onHoverStart={() => setActiveProject(index)}
              className="relative group"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-0.5">
                <div className="w-full h-full glass rounded-3xl" />
              </div>

              {/* Card content */}
              <div className="relative p-8 rounded-3xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${
                          project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        <span className="text-sm text-muted-foreground">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 glass rounded-xl"
                  >
                    <Award className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], mIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + mIndex * 0.1 }}
                      className="text-center p-3 glass rounded-xl"
                    >
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.7 + fIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: fIndex * 0.3 }}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.9 + tIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(99, 102, 241, 0.2)"
                        }}
                        className="px-3 py-1 glass rounded-full text-xs font-medium cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg group overflow-hidden relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Demo</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 glass border border-primary/30 rounded-xl font-semibold hover:bg-primary/10 transition-all group"
                  >
                    <Code className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`,
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                  zIndex: -1,
                }}
              />
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