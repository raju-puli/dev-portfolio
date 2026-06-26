import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-sky-400 to-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Angular", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "Redux", level: 88 },
    ],
  },
  {
    title: "UI & Styling",
    color: "from-violet-400 to-purple-500",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SCSS", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Real-Time & Animation",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "WebSockets / Socket.io", level: 90 },
      { name: "Konva.js", level: 85 },
      { name: "GSAP", level: 82 },
      { name: "Canvas API", level: 80 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Webpack / NPM", level: 85 },
      { name: "Cordova (Cross-Platform)", level: 82 },
      { name: "Jest / RTL", level: 70 },
      { name: "Agile / Scrum", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Technical Skills" subtitle="// what I work with" />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all duration-500"
            >
              <h3 className="font-display text-lg font-bold mb-5 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                {cat.title}
              </h3>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={ci * 2 + si}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "React.js", "Angular", "TypeScript", "Redux", "WebSockets",
            "Konva.js", "GSAP", "Tailwind CSS", "Node.js", "Socket.io",
            "Cordova", "Git", "Webpack", "REST APIs", "Context API"
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}