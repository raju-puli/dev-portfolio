import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Building2,
  Calendar,
  Code2,
  Globe,
  Smartphone,
  Zap,
  Users,
  Rocket,
  Star,
  Award,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Play,
  Heart,
  MapPin,
  Cpu,
  Layers,
  Briefcase,
  Sparkles,
  ChevronRight,
  Circle,
  TrendingUp,
  Package,
  Coffee,
  Monitor,
  Gamepad2,
  Palette,
  Share2,
  Timer,
  Crown,
  Download,
  RefreshCw,
  Shield,
  Zap as ZapIcon
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "React Game Developer",
    company: "Czar Gaming Pvt. Ltd.",
    period: "Jan 2023 — Present",
    duration: "3+ years",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "blue",
    // emoji: "🎮",
    icon: <Gamepad2 className="w-5 h-5" />,
    description: "Building real-time multiplayer gaming platforms with React and WebSockets",
    achievements: [
      "Built multiplayer poker games with real-time WebSocket communication",
      "Engineered American & European Roulette games with physics mechanics",
      "Generated cross-platform apps (APK, EXE, IPA, DMG) using Cordova",
      "Implemented PWA for seamless web-to-mobile experience",
      "Optimized Redux state management, reducing render time by 30%",
      "Created interactive UIs using Konva.js and GSAP animations"
    ],
    skills: ["React.js", "Redux", "WebSockets", "Konva", "GSAP", "Cordova"],
    stats: [
      { label: "Games", value: "4+", icon: <Play className="w-3 h-3" /> },
      { label: "Platforms", value: "5", icon: <Smartphone className="w-3 h-3" /> },
      { label: "Performance", value: "+30%", icon: <Zap className="w-3 h-3" /> }
    ]
  },
  {
    id: 2,
    title: "Angular Web Developer",
    company: "Czar Gaming Pvt. Ltd.",
    period: "Mar 2022 — Dec 2022",
    duration: "10 months",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "red",
    // emoji: "🌐",
    icon: <Globe className="w-5 h-5" />,
    description: "Developing production websites with Angular and modern web technologies",
    achievements: [
      "Developed 10+ production websites including PlayBet, RajPoker, RiverPoker etc,..",
      "Integrated secure payment gateways with multi-currency exchange",
      "Implemented multi-language support using Angular i18n for 6+ languages",
      "Built fully responsive interfaces for all screen sizes",
      "Optimized performance with lazy loading and CDN integration"
    ],
    skills: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "i18n"],
    stats: [
      { label: "Websites", value: "10+", icon: <Monitor className="w-3 h-3" /> },
      { label: "Languages", value: "6", icon: <Globe className="w-3 h-3" /> },
      { label: "Users", value: "10K+", icon: <Users className="w-3 h-3" /> }
    ]
  },
  {
    id: 3,
    title: "Personal Projects",
    company: "Self-Initiated",
    period: "2022 — Present",
    duration: "Ongoing",
    location: "Remote",
    type: "Side Projects",
    color: "purple",
    // emoji: "💡",
    icon: <Star className="w-5 h-5" />,
    description: "Building personal projects with modern frontend technologies",
    achievements: [
      "Created Wedding Invitation website with React.js animations",
      "Built multiple projects using React + Vite + TypeScript",
      "Mastered advanced React: Custom Hooks, Context API",
      "Explored WebSocket architecture and real-time applications"
    ],
    skills: ["React", "Vite", "TypeScript", "Custom Hooks", "Tailwind CSS", "Redux", "WebSockets", "REST APIs"],
    stats: [
      { label: "Projects", value: "3+", icon: <Code2 className="w-3 h-3" /> },
      { label: "Tech Stack", value: "15+", icon: <Cpu className="w-3 h-3" /> },
      // { label: "Clients", value: "4+", icon: <Heart className="w-3 h-3" /> }
    ]
  }
];

const colorMap = {
  blue: {
    light: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    bg: "bg-blue-500",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
    hover: "hover:border-blue-400/40",
    badge: "bg-blue-500/20 text-blue-400",
    ring: "ring-blue-500/20",
    dot: "bg-blue-400",
    gradient: "from-blue-500 to-cyan-400",
    cardBg: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
    shadow: "shadow-blue-500/10"
  },
  red: {
    light: "from-red-500/10 to-orange-500/10",
    border: "border-red-500/20",
    bg: "bg-red-500",
    text: "text-red-400",
    glow: "shadow-red-500/20",
    hover: "hover:border-red-400/40",
    badge: "bg-red-500/20 text-red-400",
    ring: "ring-red-500/20",
    dot: "bg-red-400",
    gradient: "from-red-500 to-orange-400",
    cardBg: "bg-gradient-to-br from-red-500/5 to-orange-500/5",
    shadow: "shadow-red-500/10"
  },
  purple: {
    light: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    bg: "bg-purple-500",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
    hover: "hover:border-purple-400/40",
    badge: "bg-purple-500/20 text-purple-400",
    ring: "ring-purple-500/20",
    dot: "bg-purple-400",
    gradient: "from-purple-500 to-pink-400",
    cardBg: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    shadow: "shadow-purple-500/10"
  }
};

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced Background with subtle gradient animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0  from-background via-background/98 to-background" />
        <div className="absolute top-1/3 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Experience" subtitle="// work history" />

        {/* Timeline with improved responsiveness */}
        <div className="mt-8 sm:mt-10 md:mt-12 relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent transform -translate-x-0.5" />

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

          {experiences.map((exp, index) => {
            const colors = colorMap[exp.color];
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 last:mb-0"
              >
                {/* Timeline dot - responsive sizing */}
                <div className="absolute left-0 md:left-1/2 top-1 transform md:-translate-x-1/2 z-10">
                  <div className={`w-10 h-10 sm:w-[46px] sm:h-[46px] rounded-full ${colors.bg} flex items-center justify-center text-white shadow-lg ${colors.glow} ring-2 ring-white/20`}>
                    <span className="scale-75 sm:scale-100">{exp.icon}</span>
                  </div>
                  <div className={`absolute inset-0 w-10 h-10 sm:w-[46px] sm:h-[46px] rounded-full ${colors.bg}/20 blur-xl animate-pulse`} />
                </div>

                {/* Content with responsive spacing */}
                <div className={`w-full ml-12 sm:ml-[52px] md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-4 lg:pr-6' : 'md:pl-4 lg:pl-6 md:ml-auto'
                  }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl sm:rounded-2xl border ${colors.border} ${colors.cardBg} backdrop-blur-sm transition-all duration-300 group hover:shadow-xl ${colors.shadow}`}
                  >
                    {/* Header with improved mobile layout */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors break-words">
                            {exp.title}
                          </h3>
                          {/* <span className="text-base sm:text-lg flex-shrink-0">{exp.emoji}</span> */}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5 truncate">
                          <Building2 size={12} sm:size={13} className="text-primary flex-shrink-0" />
                          <span className="truncate">{exp.company}</span>
                        </p>
                      </div>
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-medium rounded-full ${colors.badge} border ${colors.border} whitespace-nowrap flex-shrink-0 self-start sm:self-auto`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description - responsive text */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Stats with responsive grid */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
                      {exp.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-1.5 sm:p-2 text-center border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-primary font-bold text-xs sm:text-sm">
                            <span className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0">{stat.icon}</span>
                            <span className="text-xs sm:text-sm">{stat.value}</span>
                          </div>
                          <div className="text-[7px] sm:text-[9px] text-muted-foreground uppercase tracking-wider truncate">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable achievements with improved animation */}
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-white/5 space-y-1.5">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <CheckCircle2 size={12} sm:size={13} className={`${colors.text} mt-0.5 shrink-0`} />
                                <span className="leading-relaxed">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Skills with responsive chips */}
                          <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1 sm:gap-1.5">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono bg-white/5 border border-white/5 text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Period and location with responsive layout */}
                          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <Calendar size={12} className="text-primary flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs">{exp.period}</span>
                            </span>
                            <span className="w-px h-3 bg-white/10 hidden sm:block" />
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <Clock size={12} className="text-primary flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs">{exp.duration}</span>
                            </span>
                            <span className="w-px h-3 bg-white/10 hidden sm:block" />
                            <span className="flex items-center gap-1 sm:gap-1.5">
                              <MapPin size={12} className="text-primary flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs truncate">{exp.location}</span>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle button with better touch target */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-1 hover:gap-2 duration-300 font-medium"
                    >
                      <span>{isExpanded ? 'Show less' : 'View details'}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}