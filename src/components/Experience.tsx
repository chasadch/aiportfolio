import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "AI/ML Developer",
      company: "Freelance",
      period: "Jan 2023 – Present",
      description: "Developed intelligent automation solutions and AI-powered applications for various clients. Specialized in machine learning model deployment, natural language processing, and computer vision applications."
    },
    {
      title: "Data Science Intern",
      company: "Tech Solutions Inc",
      period: "Sep 2022 – Dec 2022",
      description: "Worked on data analysis projects using Python, TensorFlow, and various ML libraries. Contributed to building predictive models and data visualization dashboards for business intelligence."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
              MY EXPERIENCE
            </h2>
          </motion.div>

          {/* Right side - Experience Entries */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="space-y-3"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-1">
                    <span className="text-lime-400 font-medium">{exp.company}</span>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}