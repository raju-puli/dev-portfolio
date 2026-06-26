import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Users, Zap, Globe } from "lucide-react";

function AnimatedCounter({ target, suffix = "", label, icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-4 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-500 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon size={22} className="text-primary" />
      </div>
      <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading title="About Me" subtitle="// who I am" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
              I'm a passionate Frontend Engineer with <span className="text-foreground font-semibold">4+ years</span> of 
              hands-on experience building scalable, real-time web applications. I started my journey crafting 
              responsive, multilingual websites with Angular, then evolved into React for high-performance 
              gaming platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
              At <span className="text-primary font-semibold">Czar Gaming</span>, I build real-time multiplayer 
              poker platforms serving thousands of concurrent users — leveraging WebSockets, canvas rendering 
              with Konva.js & GSAP, and cross-platform builds via Cordova across Android, iOS, Windows, and macOS.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              My goal is to grow into a Full-Stack Developer with backend expertise in Node.js, Java, and Python 
              while contributing to scalable system architecture and end-to-end product development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <AnimatedCounter target={4} suffix="+" label="Years Experience" icon={Briefcase} />
            <AnimatedCounter target={20000} suffix="+" label="Concurrent Users" icon={Users} />
            <AnimatedCounter target={10} suffix="+" label="Projects Shipped" icon={Globe} />
            <AnimatedCounter target={95} suffix="+" label="Lighthouse Score" icon={Zap} />
          </div>
        </div>
      </div>
    </section>
  );
}