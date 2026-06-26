import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Rocket, Gauge, MonitorSmartphone, Wifi } from "lucide-react";

const achievements = [
  {
    icon: Rocket,
    title: "20K+ Concurrent Users",
    desc: "Successfully launched gaming platform serving 20,000+ concurrent active users",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Gauge,
    title: "40% Faster Load Time",
    desc: "Reduced initial load time by 40% through code splitting and lazy loading",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Trophy,
    title: "95+ Lighthouse Score",
    desc: "Achieved 95+ Lighthouse scores for performance and accessibility",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: MonitorSmartphone,
    title: "4 Platform Builds",
    desc: "Delivered desktop and mobile builds across Android, iOS, Windows, and macOS",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Wifi,
    title: "Real-Time Optimization",
    desc: "Improved real-time responsiveness with WebSocket optimizations and state management",
    color: "from-rose-400 to-pink-500",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Key Achievements" subtitle="// milestones" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden group hover:border-white/10 transition-all duration-500"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text-base font-bold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}