import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Education & Certifications" subtitle="// my background" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/15 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-6">
              <h4 className="font-display font-semibold text-lg text-foreground">
                B.Sc. (MECS)
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                SR & BGNR Govt. Arts & Science College, K.U, Khammam
              </p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  2021
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  CGPA: 7.32 / 10
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent/15 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Award size={22} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <BookOpen size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Python Programming</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hope Foundation — passed final assessment
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <BookOpen size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Web Development</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Online certification with assessment completion
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}