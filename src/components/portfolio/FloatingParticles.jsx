import React from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, -20, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Large gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-24 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-24 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}