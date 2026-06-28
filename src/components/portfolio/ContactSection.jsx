const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import resume from "../../assets/Resume/raju__puli__resume.pdf"

const contactInfo = [
  { icon: Mail, label: "Email", value: "rajupuli090322@gmail.com", href: "mailto:rajupuli090322@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9133443451", href: "tel:+919133443451" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/raju-puli" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rajupuli" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <SectionHeading title="Get In Touch" subtitle="// let's connect" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm currently looking for new opportunities in frontend development,
              especially in product-based companies, gaming platforms, and FinTech.
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div className="p-2.5 rounded-lg bg-primary/10">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:text-primary transition-all text-sm font-medium text-muted-foreground"
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <h3 className="font-display text-lg font-bold mb-6">Send a Quick Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                window.open(
                  `mailto:rajupuli090322@gmail.com?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(data.get("message"))}`,
                  "_blank"
                );
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-base sm:text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-sm min-h-[52px]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>

            {/* Resume Download */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 bg-white/[0.03] text-foreground font-medium rounded-xl hover:border-primary/30 hover:text-primary transition-all text-sm"
              >
                <Download size={16} />
                Download Full Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}