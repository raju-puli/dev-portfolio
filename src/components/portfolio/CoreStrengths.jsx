import React from "react";
import { motion } from "framer-motion";
import { Wifi, Gauge, MonitorSmartphone, Code, Users } from "lucide-react";

const strengths = [
  { icon: Wifi, label: "Real-Time Expertise", desc: "WebSockets, live updates, concurrent user handling" },
  { icon: Gauge, label: "Performance Optimization", desc: "Memoization, lazy loading, Lighthouse audits" },
  { icon: MonitorSmartphone, label: "Cross-Platform", desc: "Cordova builds for mobile and desktop" },
  { icon: Code, label: "Clean Code", desc: "Modular architecture, reusability, maintainability" },
  { icon: Users, label: "Collaborative", desc: "Agile, Scrum, effective code reviews" },
];

export default function CoreStrengths() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-4 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all min-h-[48px]"
            >
              <s.icon size={16} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground leading-tight">{s.label}</p>
                <p className="text-xs text-muted-foreground hidden sm:block">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}