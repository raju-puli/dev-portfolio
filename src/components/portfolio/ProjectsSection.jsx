const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink, Gamepad2, Globe } from "lucide-react";

const projects = [
  {
    title: "Real-Time Poker Gaming Platform",
    subtitle: "React + WebSockets",
    description:
      "Full gameplay interface with card rendering, player interactions, and real-time updates. Implemented WebSocket for live game events, player actions, and table management. Cross-platform mobile and desktop builds via Cordova.",
    image: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/308f9c04c_generated_70085858.png",
    tags: ["React", "Redux", "Konva.js", "GSAP", "WebSockets", "Cordova"],
    icon: Gamepad2,
    highlights: ["20K+ concurrent users", "4 platform builds", "30% faster rendering"],
    github: "https://github.com/raju-puli",
  },
  {
    title: "Multi-Currency Gaming Websites",
    subtitle: "Angular",
    description:
      "Built 10+ branded websites with responsive design and multi-language support. Integrated payment gateways and currency exchange with real-time conversion. Websites include Playbet, Rajpoker, RiverPoker, ClanSaga, and SouthRummy.",
    image: "https://media.db.com/images/public/6a3e6a42e0e905a9cc608d31/365d36b84_generated_d12b27f3.png",
    tags: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "i18n"],
    icon: Globe,
    highlights: ["10+ branded sites", "Multi-language", "Payment integration"],
    github: "https://github.com/raju-puli",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Projects" subtitle="// what I've built" />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="group flex flex-col md:grid md:grid-cols-2 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-primary/15 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-auto shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent md:bg-gradient-to-r" />
                <div className="absolute top-4 left-4">
                  <div className="p-2.5 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <project.icon size={20} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <span className="font-mono text-xs text-primary mb-2">{project.subtitle}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 bg-white/[0.03] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}