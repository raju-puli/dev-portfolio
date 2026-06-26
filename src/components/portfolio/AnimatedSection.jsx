import React from "react";
import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "", id, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}