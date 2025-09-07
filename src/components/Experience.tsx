import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Concept",
      location: "Sector I-9, Islamabad",
      period: "May 2025 - Jul 2025",
      achievements: [
        "Built 35 real-time dashboards with Power BI and Dash for LMX Apache logs, improving observability by 35%",
        "Optimized data pipeline bottlenecks and third-party query latency by 30% and error resolution by 25%",
        "Automated reports for 10+ metrics, reducing manual effort by 40% and speeding decision making by 30%",
        "Streamlined data cleaning, transformation, improving workflow efficiency by 42% and data validation by 45%"
      ]
    },
    {
      company: "Insights, NSTP",
      location: "Nust Islamabad - Remote",
      period: "May 2024 - July 2024",
      achievements: [
        "Designed database schema migration by 20% and social media engagement by 55% by adding digital outreach buttons, real-time cart updates, and client-side price filters using React",
        "Refactored routing for deep-link components, reducing UI bugs by 40% and achieving 99.2% uptime",
        "Optimized asset delivery and page rendering, speeding up average page load time from 2.5 to 1.8s, 28% faster",
        "Streamlined product listing navigation and display, improving user engagement and retention by 32%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-border"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                </motion.div>

                <div className="flex-1 bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.3 + 0.4 + achIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}