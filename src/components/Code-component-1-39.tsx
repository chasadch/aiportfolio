import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Bot, Mic, Leaf, Drone } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI Voice Agent",
      icon: <Bot className="w-6 h-6" />,
      description: "Engineered a voice-activated system using Python, Speech Recognition, and gTTS (Google Text-to-Speech) for seamless voice-based conversation between users, providing natural and intelligent responses.",
      features: [
        "Core Functionality using Python, Speech Recognition, and gTTS",
        "Email Automation for sending emails with subject and body content based on vocal instructions",
        "Natural Language Processing utilizing OpenAI's GPT API to process user queries",
        "Web Integration incorporating web scraping techniques and Google Search API for comprehensive search results"
      ],
      technologies: ["Python", "OpenAI GPT", "Speech Recognition", "gTTS", "Web Scraping"],
      status: "Completed"
    },
    {
      title: "AI Native Interactive Portfolio",
      icon: <Mic className="w-6 h-6" />,
      description: "Created a dynamic portfolio with question answering, expressive gestures, and immersive engagement for recruiters and visitors.",
      features: [
        "Implemented AI-driven question answering with voice interaction for user engagement with real time question answering",
        "Designed dynamic portfolio components with seamless cross-device accessibility",
        "Optimized for context-aware responses, personalized recommendations, and seamless cross-device accessibility"
      ],
      technologies: ["React", "AI/ML", "Voice Recognition", "Cross-platform"],
      status: "Ongoing"
    },
    {
      title: "Plant Disease Detection System",
      icon: <Leaf className="w-6 h-6" />,
      description: "AI-powered system for increasing and maintaining plant health through early disease detection and treatment recommendations.",
      features: [
        "Built structured dataset pipelines with TensorFlow, EfficientNet, and Flask to detect plant diseases from leaf images using deep learning",
        "Delivered detailed prediction reports on plant symptoms, causes, and treatments",
        "Achieved 90% classification accuracy across 38 disease classes on the PlantVillage dataset"
      ],
      technologies: ["TensorFlow", "EfficientNet", "Flask", "Deep Learning", "Computer Vision"],
      status: "Completed"
    },
    {
      title: "AI Autonomous Drone System",
      icon: <Drone className="w-6 h-6" />,
      description: "Advanced autonomous drone system combining hardware and software for reliable navigation and intelligent decision-making.",
      features: [
        "The autonomous drone system combines hardware (Pixhawk flight controller, lidar, computer, telemetry radio, and LiDAR) with advanced software for reliable navigation",
        "Computer vision processes camera data to recognize surroundings and obstacles, while path planning algorithms generate optimal routing to avoid obstacles",
        "Real-time decision-making algorithms adapt to changing conditions, obstacle avoidance, and the Pixhawk handles flight stability and low-level control"
      ],
      technologies: ["Pixhawk", "Computer Vision", "LiDAR", "Path Planning", "Real-time Systems"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent/5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-primary/10 rounded-lg text-primary"
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-blue-500/10 text-blue-500'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 + fIndex * 0.1 }}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + tIndex * 0.05 }}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg text-sm hover:bg-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}