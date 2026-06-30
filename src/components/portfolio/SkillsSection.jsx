import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

import {
  FaReact,
  FaAngular,
  FaSass,
  FaCss3Alt,
  FaGitAlt,
  FaPlug,
  FaGlobe,
  FaCode,
  FaPaintBrush,
  FaTools,
  FaLanguage,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNgrx,
  SiApachecordova,
  SiBitbucket,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
  TbPlugConnected,
  TbWorld,
} from "react-icons/tb";

import {
  MdLanguage,
  MdPayments,
  MdDevices,
  MdPhoneIphone,
} from "react-icons/md";

const skills = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: FaReact,
    color: "#61dafb",
  },
  {
    name: "Angular",
    category: "frontend",
    icon: FaAngular,
    color: "#dd0031",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178c6",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    color: "#f7df1e",
  },

  // State Management
  {
    name: "Redux",
    category: "state-management",
    icon: SiRedux,
    color: "#764abc",
  },
  {
    name: "NgRx",
    category: "state-management",
    icon: SiNgrx,
    color: "#ba2bd2",
  },

  // Styling & Responsive Design
  {
    name: "Tailwind",
    category: "styling",
    icon: SiTailwindcss,
    color: "#06b6d4",
  },
  {
    name: "SCSS",
    category: "styling",
    icon: FaSass,
    color: "#cc6699",
  },
  {
    name: "CSS",
    category: "styling",
    icon: FaCss3Alt,
    color: "#2965f1",
  },
  {
    name: "Responsive Design",
    category: "styling",
    icon: MdDevices,
    color: "#8b5cf6",
  },

  // Multi Language / Localization
  {
    name: "i18next",
    category: "multi-language",
    icon: MdLanguage,
    color: "#0ea5e9",
  },
  {
    name: "Localization",
    category: "multi-language",
    icon: TbWorld,
    color: "#22c55e",
  },

  // Web & Native App Integration
  {
    name: "REST API",
    category: "integration",
    icon: FaPlug,
    color: "#f97316",
  },
  {
    name: "WebSocket",
    category: "integration",
    icon: TbPlugConnected,
    color: "#4CAF50",
  },
  {
    name: "Native App Integration",
    category: "integration",
    icon: MdPhoneIphone,
    color: "#3b82f6",
  },
  {
    name: "Payment Gateway",
    category: "integration",
    icon: MdPayments,
    color: "#14b8a6",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: FaGitAlt,
    color: "#f05032",
  },
  {
    name: "Bitbucket",
    category: "tools",
    icon: SiBitbucket,
    color: "#0052cc",
  },
  {
    name: "Cordova",
    category: "tools",
    icon: SiApachecordova,
    color: "#E8E8E8",
  },
  // VS Code - Added at the end
  {
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    color: "#007ACC",
  },
];

const categories = [
  { id: "all", label: "All", icon: FaGlobe },
  { id: "frontend", label: "Frontend", icon: FaCode },
  { id: "state-management", label: "State Management", icon: FaLayerGroup },
  { id: "styling", label: "Styling", icon: FaPaintBrush },
  { id: "multi-language", label: "Multi-Language", icon: FaLanguage },
  { id: "integration", label: "Integration", icon: FaPlug },
  { id: "tools", label: "Tools", icon: FaTools },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return skills.length;
    return skills.filter((s) => s.category === categoryId).length;
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <SectionHeading title="Skills & Expertise" subtitle="// technologies I work with" />

        {/* Category Filters - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                  ? "text-white shadow-lg"
                  : "border border-white/10 hover:border-white/30 text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10"
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-blue-500/30"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.25 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2.5">
                  <IconComponent
                    className={`text-base transition-colors duration-300 ${activeCategory === cat.id ? "text-white" : "text-muted-foreground"
                      }`}
                  />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.charAt(0)}</span>
                  <span
                    className={`ml-0.5 text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 ${activeCategory === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-muted-foreground"
                      }`}
                  >
                    {getCategoryCount(cat.id)}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid - Enhanced */}
        <motion.div layout className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative"
                >
                  <div
                    className="relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 h-full cursor-default text-center overflow-hidden"
                    style={{
                      borderColor:
                        hoveredSkill === skill.name
                          ? skill.color
                          : "rgba(255,255,255,0.06)",
                      background:
                        hoveredSkill === skill.name
                          ? `linear-gradient(135deg, ${skill.color}15, transparent 60%)`
                          : "rgba(255,255,255,0.02)",
                      boxShadow:
                        hoveredSkill === skill.name
                          ? `0 0 40px ${skill.color}25, inset 0 0 40px ${skill.color}10`
                          : "none",
                    }}
                  >
                    {/* Animated Border Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${skill.color}30, transparent 70%)`,
                      }}
                    />

                    {/* Floating Particles Effect */}
                    {hoveredSkill === skill.name && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ background: skill.color }}
                            initial={{
                              x: 0,
                              y: 0,
                              opacity: 0,
                              scale: 0,
                            }}
                            animate={{
                              x: [0, (Math.random() - 0.5) * 80, 0],
                              y: [0, (Math.random() - 0.5) * 80, 0],
                              opacity: [0, 0.8, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5 + Math.random(),
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${20 + Math.random() * 60}%`,
                            }}
                          />
                        ))}
                      </>
                    )}

                    <div className="relative z-10">
                      {/* Icon with Ring */}
                      <div className="relative inline-block">
                        <motion.div
                          className="text-5xl mb-3 transition-all duration-300 flex justify-center"
                          style={{
                            transform:
                              hoveredSkill === skill.name
                                ? "scale(1.2) rotate(-5deg)"
                                : "scale(1)",
                            color: hoveredSkill === skill.name ? skill.color : "currentColor",
                          }}
                        >
                          <IconComponent />
                        </motion.div>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.2 }}
                            className="absolute inset-0 rounded-full"
                            style={{
                              border: `2px solid ${skill.color}`,
                              boxShadow: `0 0 30px ${skill.color}50`,
                            }}
                          />
                        )}
                      </div>

                      {/* Name */}
                      <h4 className="text-sm font-semibold text-foreground transition-colors duration-300">
                        {skill.name}
                      </h4>

                      {/* Category Badge */}
                      <div className="mt-2 inline-block">
                        <span
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full opacity-60"
                          style={{
                            background: `${skill.color}20`,
                            color: hoveredSkill === skill.name ? skill.color : "currentColor",
                          }}
                        >
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-3 right-3 flex gap-1">
                      <div
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{
                          background:
                            hoveredSkill === skill.name ? skill.color : "rgba(255,255,255,0.1)",
                          boxShadow:
                            hoveredSkill === skill.name ? `0 0 12px ${skill.color}` : "none",
                        }}
                      />
                      <div
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{
                          background:
                            hoveredSkill === skill.name ? skill.color : "rgba(255,255,255,0.05)",
                          boxShadow:
                            hoveredSkill === skill.name ? `0 0 12px ${skill.color}` : "none",
                          opacity: hoveredSkill === skill.name ? 1 : 0.5,
                        }}
                      />
                    </div>

                    {/* Bottom Glow Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5"
                      style={{ background: skill.color }}
                      initial={{ width: "0%" }}
                      animate={{
                        width: hoveredSkill === skill.name ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State - Enhanced */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl block mb-4"
            >
              🔍
            </motion.div>
            <p className="text-muted-foreground text-lg">No skills in this category</p>
          </motion.div>
        )}

        {/* Active Skills Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-wider">
            {filteredSkills.length} {filteredSkills.length === 1 ? "skill" : "skills"} •{" "}
            {categories.find((c) => c.id === activeCategory)?.label}
          </span>
        </motion.div>
      </div>
    </section>
  );
}