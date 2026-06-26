import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Building2, Calendar } from "lucide-react";

const phases = [
  {
    title: "React Game Development",
    role: "Frontend Developer — Phase 2",
    company: "Czar Gaming Pvt. Ltd.",
    period: "Jan 2023 — Present",
    location: "Hyderabad",
    points: [
      "Transitioned to React.js for building real-time multiplayer poker and gaming platforms",
      "Implemented WebSocket connections for real-time game events, player actions, and live updates",
      "Developed interactive game UIs using Konva and GSAP for smooth animations and canvas rendering",
      "Designed multi-table support for simultaneous gameplay across multiple tables",
      "Created cross-platform builds using Cordova — APK, IPA, EXE, DMG installers",
      "Implemented Redux-based state management with memoization, reducing rendering time by 30%",
      "Built responsive game interfaces for mobile, tablet, and desktop",
      "Integrated REST APIs for authentication, leaderboards, transactions, and game history",
    ],
    tags: ["React", "Redux", "WebSockets", "Konva.js", "GSAP", "Cordova"],
  },
  {
    title: "Angular Website Development",
    role: "Frontend Developer — Phase 1",
    company: "Czar Gaming Pvt. Ltd.",
    period: "Mar 2022 — Dec 2022",
    location: "Hyderabad",
    points: [
      "Developed and maintained production websites including Playbet, Rajpoker, RiverPoker, ClanSaga, and SouthRummy",
      "Implemented payment gateway integrations with secure transaction flows",
      "Built multi-currency exchange systems with real-time conversion rates",
      "Added multi-language support using Angular i18n (English, Portuguese, Spanish, and more)",
      "Designed fully responsive websites for desktop, tablet, and mobile",
      "Optimized performance using lazy loading, CDN integration, and image optimization",
    ],
    tags: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "i18n"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Experience" subtitle="// where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="relative pl-10 md:pl-16 mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[13px] md:left-[22px] top-3 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 ring-2 ring-background ring-offset-0" />
              
              {/* Card */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/15 transition-all duration-500 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Building2 size={14} className="text-primary" />
                      {phase.company}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                    <Calendar size={12} />
                    {phase.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {phase.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.05 }}
                      className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}