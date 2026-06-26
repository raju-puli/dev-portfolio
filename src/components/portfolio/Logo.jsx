import React from "react";
import { motion } from "framer-motion";

// SVG logo component — no external URLs, pure inline SVG
export default function Logo({ size = 36, showText = true, animate = false }) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? { whileHover: { scale: 1.08 }, transition: { type: "spring", stiffness: 300 } }
    : {};

  return (
    <Wrapper {...wrapperProps} className="flex items-center gap-2.5 cursor-pointer select-none">
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="logoBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        {/* Hexagon background */}
        <path
          d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
          fill="url(#logoBg)"
          stroke="url(#logoGrad)"
          strokeWidth="1.2"
        />
        {/* "R" letterform */}
        <text
          x="7"
          y="27"
          fontSize="18"
          fontWeight="800"
          fontFamily="'Space Grotesk', sans-serif"
          fill="url(#logoGrad)"
          letterSpacing="-1"
        >
          RP
        </text>
        {/* Corner accent dots */}
        <circle cx="20" cy="2.5" r="1.5" fill="#38bdf8" opacity="0.8" />
        <circle cx="36" cy="11" r="1.5" fill="#a78bfa" opacity="0.6" />
        <circle cx="36" cy="29" r="1.5" fill="#a78bfa" opacity="0.6" />
        <circle cx="4" cy="11" r="1.5" fill="#38bdf8" opacity="0.6" />
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className="font-display font-bold text-lg tracking-tight leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Raju</span>
          <span className="text-foreground ml-1">Puli</span>
        </span>
      )}
    </Wrapper>
  );
}