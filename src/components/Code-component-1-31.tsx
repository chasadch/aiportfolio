import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-accent/5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Computer Science graduate with expertise in Python, AI/ML model development, and automation pipelines. 
                Skilled in building AI agents and interactive UI/algorithmic learning systems, delivering scalable, 
                context-aware solutions that enhance user experience and streamline business processes.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Based in Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Bachelor's in Computer Science (2024)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Specialized in AI/ML & Automation</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Core Competencies</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI/ML Development</span>
                    <div className="w-32 h-2 bg-muted rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "90%" } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-primary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Python Development</span>
                    <div className="w-32 h-2 bg-muted rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "95%" } : {}}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-primary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Automation Systems</span>
                    <div className="w-32 h-2 bg-muted rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "85%" } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="h-full bg-primary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}