import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Sparkles, Code, Brain, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "AI/ML Developer",
    "Full Stack Engineer", 
    "Python Expert",
    "Automation Specialist"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? "from-primary to-secondary" :
              i % 3 === 1 ? "from-secondary to-accent" :
              "from-accent to-primary"
            }`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        >
          {/* Main heading with morphing effect */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-6 text-gradient leading-tight"
              initial={{ scale: 0.5, rotateX: 90 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.2, 
                type: "spring", 
                stiffness: 100,
                delay: 0.2 
              }}
            >
              Muhammad
              <br />
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-primary"
              >
                Asad Arshad
              </motion.span>
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>

          {/* Animated role switcher */}
          <motion.div
            variants={itemVariants}
            className="mb-8 h-20 flex items-center justify-center"
          >
            <div className="glass rounded-2xl px-8 py-4 relative overflow-hidden">
              <motion.div
                key={currentRole}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-primary"
              >
                {roles[currentRole]}
              </motion.div>
              
              {/* Role indicator dots */}
              <div className="flex justify-center gap-2 mt-2">
                {roles.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentRole ? "bg-primary" : "bg-muted"
                    }`}
                    animate={{
                      scale: index === currentRole ? 1.2 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Crafting intelligent solutions with{" "}
              <span className="text-primary font-semibold">AI/ML</span>,{" "}
              <span className="text-secondary font-semibold">automation</span>, and{" "}
              <span className="text-accent font-semibold">cutting-edge technology</span>
            </motion.p>
          </motion.div>

          {/* Skill badges with icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { icon: <Brain className="w-5 h-5" />, text: "AI/ML Expert", color: "from-primary to-primary/60" },
              { icon: <Code className="w-5 h-5" />, text: "Full Stack", color: "from-secondary to-secondary/60" },
              { icon: <Rocket className="w-5 h-5" />, text: "Automation", color: "from-accent to-accent/60" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`glass px-6 py-3 rounded-full flex items-center gap-3 cursor-pointer bg-gradient-to-r ${skill.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {skill.icon}
                </motion.div>
                <span className="font-medium">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg glass glow"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                View My Work
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-primary/30 rounded-2xl font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="glass p-3 rounded-full"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}