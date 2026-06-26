import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block font-mono text-sm text-primary mb-3 tracking-widest uppercase"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-2xl sm:text-4xl md:text-5xl font-bold"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}