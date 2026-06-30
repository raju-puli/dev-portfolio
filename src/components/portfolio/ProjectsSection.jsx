import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Github,
  Gamepad2,
  Globe,
  ExternalLink,
  Users,
  Zap,
  Smartphone,
  Monitor,
  Sparkles,
  ChevronRight,
  Calendar,
  ArrowUpRight,
  Trophy,
  CheckCircle2,
  Shield,
  Code2,
  Rocket,
  Award,
  Star,
  Layers,
  Cpu,
  Heart,
  Eye,
  Share2,
  Clock,
  Play,
  BarChart,
  TrendingUp,
  X,
  Diamond,
  Crown,
  Coffee,
  Palette,
  Layout,
  Box,
  Grid,
  List,
  Maximize2,
  Minimize2,
  Gift,
  Flame,
  Music,
  Users as UsersIcon,
  DollarSign,
  Globe2,
  Tablet,
  Laptop,
  Gamepad as GamepadIcon,
  Joystick,
  Tv,
  Wind,
  Target,
  Rocket as RocketIcon,
  Circle,
  Hexagon,
  Filter,
  Grid3x3,
  Square,
  Minimize,
  Maximize,
  Sparkle,
  Search,
  Building,
  Store,
  ShoppingBag,
  Briefcase,
  Compass,
  MapPin,
  Navigation,
  Link,
  Webhook,
  Wifi,
  Gamepad,
  Trophy as TrophyIcon,
  Flame as FlameIcon,
  Crown as CrownIcon,
  Diamond as DiamondIcon,
  Gift as GiftIcon,
  Coffee as CoffeeIcon,
  Music as MusicIcon,
  Palette as PaletteIcon,
  Layout as LayoutIcon,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Coins
} from "lucide-react";

import { Dice1 } from "lucide-react";

// Import images - make sure these paths are correct
import project1 from "../../assets/6774fbe31_generated_image.png";
import project2 from "../../assets/f2c9605b3_generated_image.png";

import riv_h5 from "../../assets/Projects_Imgs/riverpokerH5.png";
import raj_h5 from "../../assets/Projects_Imgs/rajpokerH5.png";
import south_lobby from "../../assets/Projects_Imgs/southrummyLobby.png";

import riv from "../../assets/Projects_Imgs/riverpokerWeb.png";
import raj from "../../assets/Projects_Imgs/rajpokerWeb.png";
import vava from "../../assets/Projects_Imgs/vavaoneWeb.png";
import playBet from "../../assets/Projects_Imgs/playbetWeb.png";
import south from "../../assets/Projects_Imgs/southrummyWeb.png";
import rrr from "../../assets/Projects_Imgs/rrrcasinoWeb.png";
import leo from "../../assets/Projects_Imgs/leorummyWeb.png";
import acego from "../../assets/Projects_Imgs/acegoWeb.png";
import millo from "../../assets/Projects_Imgs/millobetWeb.png";
import weddingWebsite from "../../assets/Projects_Imgs/mywedWeb.png";


// Game Projects Data
const gameProjects = [
  {
    id: "riverpoker-h5",
    title: "RiverPoker H5",
    description: "Real-time multiplayer poker game with modern H5 interface. Features tournaments, cash games.",
    image: riv_h5,
    tech: ["React", "WebSockets", "Redux", "Konva.js", "GSAP", "BootStrap"],
    features: [
      "Multiplayer poker tables",
      "Tournament mode with daily events",
      "Real-time WebSocket communication",
      "Cross-platform mobile support"
    ],
    liveLink: "https://www.riverpoker.com/pokerh5v4/",
    stats: { players: "10K+", tables: "50+", rating: "4.8" },
    category: "game",
    badge: <Gamepad2 className="w-5 h-5 text-yellow-400" />,
    gradient: "from-blue-400 to-cyan-300",
    accent: "blue"
  },
  {
    id: "rajpoker-h5",
    title: "RajPoker H5",
    description: "Classic poker experience with real-time multiplayer, tournament support, and Indian payment methods integration.",
    image: raj_h5,
    tech: ["React", "WebSockets", "Redux", "i18n", "Tailwind"],
    features: [
      "Real-time multiplayer gameplay",
      "Tournament support",
      "Indian payment methods",
      "Multi-language support",
      "Responsive design"
    ],
    liveLink: "https://rajpoker.com/pokerh5/",
    stats: { players: "15K+", tournaments: "20+", rating: "4.7" },
    category: "game",
    badge: <Gamepad2 className="w-5 h-5 text-emerald-400" />,
    gradient: "from-emerald-400 to-teal-300",
    accent: "emerald"
  },
  {
    id: "southrummy-play",
    title: "SouthRummy Play",
    description: "India's favorite card game with real cash prizes, multiplayer support, and daily tournaments.",
    image: south_lobby,
    tech: ["React", "WebSockets", "Socket.io", "Tailwind"],
    features: [
      "Real cash prizes",
      "Multiplayer support",
      "Daily tournaments",
      "Leaderboard system",
      "Secure payment integration"
    ],
    liveLink: "https://southrummy.com/play",
    stats: { players: "12K+", games: "10+", rating: "4.9" },
    category: "game",
    badge: <Gamepad2 className="w-5 h-5 text-amber-400" />,
    gradient: "from-amber-400 to-orange-300",
    accent: "amber"
  }
];

// Website Projects Data
const websiteProjects = [
  {
    id: "riverpoker",
    title: "River Poker",
    description: "Largest online poker room in Iran featuring tournaments, cash games, live casinos, and sports betting with Rial and Crypto support.",
    image: riv,
    tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "i18n"],
    features: [
      "Daily and weekly tournaments",
      "Cash game tables",
      "Sports betting",
      "Multi-currency support (Rial & Crypto)"
    ],
    liveLink: "https://www.riverpoker.com/",
    stats: { users: "10K+", games: "1K+", uptime: "99.9%" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-purple-400" />,
    gradient: "from-purple-400 to-pink-300",
    accent: "purple"
  },
  {
    id: "rajpoker",
    title: "Raj Poker",
    description: "Historic poker room with comprehensive gaming platform featuring tournaments, cash games, and live casino.",
    image: raj,
    tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "WebRTC"],
    features: [
      "Historic poker room",
      "Tournament management",
      "Cash game tables",
      "Live casino games",
      "Multi-language support"
    ],
    liveLink: "https://www.rajpoker.com/",
    stats: { users: "10K+", tournaments: "1K+", rating: "4.8" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-indigo-400" />,
    gradient: "from-indigo-400 to-blue-300",
    accent: "indigo"
  },
  {
    id: "playbet",
    title: "Play Bet",
    description: "Online betting and gaming platform for the Argentine market with live odds and multiple sports.",
    image: playBet,
    tech: ["Angular", "TypeScript", "REST APIs", "Bootstrap", "i18n", "CMS"],
    features: [
      "Live odds",
      "Multiple sports betting",
      "Secure payment integration",
      "Responsive design",
      "Multi-language support"
    ],
    liveLink: "https://play.bet.ar/",
    stats: { users: "15K+", games: "5K+", uptime: "99.8%" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-rose-400" />,
    gradient: "from-rose-400 to-red-300",
    accent: "rose"
  },
  {
    id: "southrummy",
    title: "South Rummy",
    description: "India's largest rummy community platform where players can join millions and win real cash prizes daily.",
    image: south,
    tech: ["Angular", "Firebase", "Tailwind", "Chart.js"],
    features: [
      "Real cash prizes",
      "Multiplayer rummy",
      "Daily tournaments",
      "Community features",
      "Secure transactions"
    ],
    liveLink: "https://www.southrummy.com/",
    stats: { users: "10K+", sports: "5+", rating: "4.9" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-violet-400" />,
    gradient: "from-violet-400 to-purple-300",
    accent: "violet"
  },
  {
    id: "rrrcasino",
    title: "RRRcasino",
    description: "Online casino with Aviator, Slots, Andar Bahar, Roulette, Baccarat, and Sports betting.",
    image: rrr,
    tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "Socket.io"],
    features: [
      "Aviator game",
      "Slot machines",
      "Table games (Andar Bahar, Roulette, Baccarat)",
      "Sports betting",
      "Live casino"
    ],
    liveLink: "https://rrrcasino.com/",
    stats: { users: "10K+", games: "300+", uptime: "99.7%" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-fuchsia-400" />,
    gradient: "from-fuchsia-400 to-pink-300",
    accent: "fuchsia"
  },
  {
    id: "vavaone",
    title: "VavaOne",
    description: "Premier online gaming and betting platform offering sports betting, live casino games, slots, and thrilling Aviator game with real-time action.",
    image: vava,
    tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "WebSockets"],
    features: [
      "Sports betting with live odds",
      "Live casino games (Andar Bahar, Roulette, Baccarat)",
      "Slot machines and table games",
      "Aviator game with real-time betting",
      "Secure payment integration",
      "Multi-language support"
    ],
    liveLink: "https://vavaone.com/home",
    stats: { users: "2K+", games: "40+", rating: "4.7" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-red-400" />,
    gradient: "from-red-400 to-orange-300",
    accent: "red"
  },
  {
    id: "leorummy",
    title: "Leo Rummy",
    description: "Rummy gaming platform for the Indian market with multiplayer support and cash prizes.",
    image: leo,
    tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "i18n"],
    features: [
      "Multiplayer rummy",
      "Cash prizes",
      "Tournament support",
      "Indian payment methods",
      "Responsive design"
    ],
    liveLink: "https://leorummy.com/",
    stats: { users: "4K+", sports: "5+", rating: "4.6" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-cyan-400" />,
    gradient: "from-cyan-400 to-sky-300",
    accent: "cyan"
  },
  {
    id: "acego",
    title: "Acego",
    description: "Live gaming and betting platform with real-time updates and interactive features.",
    image: acego,
    tech: ["Angular", "TypeScript", "REST APIs", "Bootstrap", "CMS"],
    features: [
      "Live gaming",
      "Real-time updates",
      "Interactive features",
      "Responsive design",
      "Multi-platform support"
    ],
    liveLink: "https://acego.live/",
    stats: { users: "15K+", games: "2K+", rating: "4.5" },
    category: "website",
    badge: <Globe className="w-5 h-5 text-teal-400" />,
    gradient: "from-teal-400 to-emerald-300",
    accent: "teal"
  },
  // {
  //   id: "millobet",
  //   title: "Millo Bet",
  //   description: "Online betting and gaming platform with comprehensive sports betting and casino games.",
  //   image: millo,
  //   tech: ["Angular", "TypeScript", "Bootstrap", "REST APIs"],
  //   features: [
  //     "Sports betting",
  //     "Casino games",
  //     "Live odds",
  //     "Secure payments",
  //     "Multi-language support"
  //   ],
  //   liveLink: "https://millobet.com/",
  //   stats: { users: "16K+", games: "3K+", rating: "4.4" },
  //   category: "website",
  //   badge: <Globe className="w-5 h-5 text-amber-400" />,
  //   gradient: "from-amber-400 to-yellow-300",
  //   accent: "amber"
  // },
  {
    id: "wedding-website",
    title: "Wedding Invitation Website",
    description: "A personalized static wedding invitation website featuring ceremony details, family information, venue location, and digital music resources.",
    image: weddingWebsite,
    tech: ["React", "Vite", "JavaScript", "CSS"],
    features: [
      "Bride & Groom profiles",
      "Qualifications section",
      "Wedding date reveal",
      "Digital wedding invitation cards",
      "Both families' details",
      "Venue location with map",
      "QR code for invitation access"
    ],
    liveLink: "https://raju-puli.github.io/wed-card/",
    stats: {
      pages: "7+",
      type: "Static",
      responsive: "100%"
    },
    category: "website",
    badge: <Heart className="w-5 h-5 text-rose-400" />,
    gradient: "from-rose-400 to-pink-300",
    accent: "rose"
  }
];

const allProjects = [...gameProjects, ...websiteProjects];

// Enhanced Modal Component with Glassmorphism and Interactive Elements
const ProjectModal = ({ project, onClose }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0, rotateX: -10 }}
        animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.8, y: 50, opacity: 0, rotateX: -10 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-[#0a0a12] rounded-3xl border border-white/10 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
        style={{ marginTop: '80px' }}
      >
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-3xl`} />

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute popup_close_btn top-5 right-5 p-3 rounded-full bg-black/60 hover:bg-white/10 backdrop-blur-xl border border-white/10 transition-all duration-300 z-20 group"
        >
          <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        </motion.button>

        {/* Header with Parallax Image */}
        <div className="relative h-80 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/60 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 mix-blend-overlay`} />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                {project.badge}
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                {project.category === 'game' ? 'Interactive Game' : 'Web Platform'}
              </span>
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </motion.span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Content with Enhanced Glassmorphism */}
        <div className="relative p-6 md:p-8 space-y-6 md:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 leading-relaxed text-base md:text-lg"
          >
            {project.description}
          </motion.p>

          {/* Enhanced Stats with Glass Cards */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {Object.entries(project.stats).map(([key, value], idx) => (
              <motion.div
                key={key}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 text-center border border-white/5 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{key}</div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Features with Icon Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkle className="w-4 h-4 text-yellow-400" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0 group-hover:scale-150 transition-transform duration-300`} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack with Interactive Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Button with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-6 border-t border-white/5 flex gap-4 flex-wrap"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg shadow-black/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Visit Website
                <motion.div
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                animate={{ x: isHovering ? '100%' : '-100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Filter Chip Component with Glow Effects
const FilterChip = ({ label, icon, active, onClick, gradient, count }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${active
        ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-primary/25`
        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
        }`}
    >
      {active && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        <span className="hidden sm:inline">{label}</span>
        {count !== undefined && (
          <span className={`text-xs ${active ? 'text-white/80' : 'text-gray-500'}`}>
            ({count})
          </span>
        )}
      </span>
    </motion.button>
  );
};

// Enhanced Project Grid Item with 3D Hover
const ProjectGridItem = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", damping: 20, stiffness: 300 }
      }}
      className="group cursor-pointer perspective-1000"
      onClick={() => onClick(project)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 3 : 0,
          rotateY: isHovered ? 3 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d0d14] to-[#1a1a24] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Animated Gradient Border */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={{
            background: isHovered ?
              [`linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                `linear-gradient(225deg, transparent, rgba(255,255,255,0.1), transparent)`] :
              'transparent'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Glow Effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />

        <div className="relative p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5">
                {project.badge}
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 hidden sm:inline-block`}>
                {project.category}
              </span>
            </div>
            <motion.div
              whileHover={{ x: 5, y: -5 }}
              className="text-white/20 group-hover:text-white/60 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Title */}
          <h4 className="text-base md:text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h4>

          {/* Description */}
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 3).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-gray-500">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Stats with animated counters */}
          {/* <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
            {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <motion.span
                  className="text-sm font-bold text-white"
                  animate={{
                    scale: isHovered ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {value}
                </motion.span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{key}</span>
              </div>
            ))}
          </div> */}

          {/* Click indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute bottom-4 right-4 text-xs text-primary/60"
          >
            Click to explore →
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced View Toggle
const ViewToggle = ({ view, setView }) => {
  return (
    // <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xl">
    <div className="flex max-md:hidden items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setView('grid')}
        className={`p-2.5 rounded-lg transition-all duration-300 ${view === 'grid'
          ? 'bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg shadow-primary/25'
          : 'text-gray-500 hover:text-gray-300'
          }`}
        aria-label="Grid view"
      >
        <Grid3x3 className="w-4 h-4" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setView('list')}
        className={`p-2.5 rounded-lg transition-all duration-300 ${view === 'list'
          ? 'bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg shadow-primary/25'
          : 'text-gray-500 hover:text-gray-300'
          }`}
        aria-label="List view"
      >
        <List className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const getFilteredProjects = () => {
    let projects = allProjects;
    if (filter === 'game') projects = gameProjects;
    if (filter === 'website') projects = websiteProjects;

    if (searchTerm) {
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return projects;
  };

  const filteredProjects = getFilteredProjects();
  const totalProjects = allProjects.length;
  const gameCount = gameProjects.length;
  const websiteCount = websiteProjects.length;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 from-[#030305] via-[#0a0a12] to-[#030305]" />
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Recent Projects" subtitle="// what I've built" />

        {/* Enhanced Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
            <FilterChip
              label="All Projects"
              icon={<Box className="w-4 h-4" />}
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              gradient="from-primary to-blue-400"
              count={totalProjects}
            />
            <FilterChip
              label="Games"
              icon={<Gamepad2 className="w-4 h-4" />}
              active={filter === 'game'}
              onClick={() => setFilter('game')}
              gradient="from-blue-400 to-cyan-300"
              count={gameCount}
            />
            <FilterChip
              label="Websites"
              icon={<Globe className="w-4 h-4" />}
              active={filter === 'website'}
              onClick={() => setFilter('website')}
              gradient="from-purple-400 to-pink-300"
              count={websiteCount}
            />
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search Bar */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 lg:flex-none relative"
            >
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-48 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-sm pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </motion.div>
            <ViewToggle view={view} setView={setView} />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className={`grid gap-5 ${view === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectGridItem
                key={project.id}
                project={project}
                onClick={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">
              <Search className="w-10 h-10 mx-auto text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No projects found matching your criteria</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search terms</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}