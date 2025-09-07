import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Brain, Settings } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages & Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C++", "SQL", "JavaScript/TypeScript", "React", "Next.js", "HTML/CSS", "Flask"]
    },
    {
      title: "Data Science & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain", "Vector DB", "Neo4j", "SDK", "Streamlit", "Plotly", "Matplotlib", "Seaborn", "TensorFlow", "Machine Learning", "AI Agents", "Dash"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Docker", "AWS", "Git", "GitHub", "VS Code", "Jupyter", "Power BI", "Tableau", "Elasticsearch", "Logstash", "Kibana"]
    },
    {
      title: "Soft Skills",
      icon: <Database className="w-6 h-6" />,
      skills: ["Data-driven Decision Making", "Problem-solving", "Analytical Thinking", "Communication", "Teamwork", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-primary/10 rounded-lg text-primary"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.3 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgb(var(--primary))",
                      color: "rgb(var(--primary-foreground))"
                    }}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm cursor-default transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about staying current with emerging technologies and continuously expanding my skill set. 
              Currently exploring advanced AI architectures, cloud computing, and modern development frameworks to deliver 
              cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}