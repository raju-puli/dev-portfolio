import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowDown, Github, Linkedin, Circle } from "lucide-react";
import bg from "../../assets/bg.png";
import avatar from "../../assets/LinkedIn_profile.jpeg";

const titles = [
  "Frontend Engineer",
  "React.js Developer",
  "Real-Time App Specialist",
  "Angular Developer",
  "UI Engineer",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && !isTypingComplete) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setIsTypingComplete(true);
          // Wait before starting deletion
          setTimeout(() => {
            setIsDeleting(true);
            setIsTypingComplete(false);
          }, 2000);
        }
      }, 80);
    } else if (isDeleting) {
      // Deleting phase
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          // Move to next title
          setIsDeleting(false);
          setIsTypingComplete(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isTypingComplete, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen-full flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Abstract futuristic background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center pt-24 pb-16">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
        >
          <Circle size={8} className="fill-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
              <img
                src={avatar}
                alt="Raju Puli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
            Raju
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent ml-4">
            Puli
          </span>
        </motion.h1>

        {/* Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-8 sm:h-10 flex items-center justify-center mb-5 sm:mb-6"
        >
          <span className="font-mono text-base sm:text-xl text-primary">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed px-2"
        >
          4+ years building high-performance, real-time web applications.
          Delivering gaming platforms serving{" "}
          <span className="text-primary font-semibold">20,000+ concurrent users</span>{" "}
          with expertise in WebSockets, canvas rendering & cross-platform builds.
        </motion.p>

        {/* Info Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            Hyderabad, India
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} className="text-primary" />
            rajupuli090322@gmail.com
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm sm:text-base"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm sm:text-base"
          >
            View Projects
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/raju-puli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rajupuli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}