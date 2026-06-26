import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built with <Heart size={14} className="text-red-400 fill-red-400" /> by Raju Puli
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/raju-puli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/rajupuli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rajupuli090322@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}