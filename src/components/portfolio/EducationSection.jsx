import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award, BookOpen, Eye, X, FileText } from "lucide-react";
import d_c from "../../../public/Certificates/Degree_long_memo.jpg";
import p_c from "../../../public/Certificates/PythonCertificate.pdf";

export default function EducationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = {
    degree: {
      title: "B.Sc. (MECS) Degree Certificate",
      file: d_c,
      type: "pdf",
      description: "Bachelor of Science in Mathematics, Electronics & Computer Science"
    },
    webDev: {
      title: "Web Development Certification",
      file: "/path-to-your-web-certificate.jpg",
      type: "image",
      description: "Online certification with assessment completion"
    },
    python: {
      title: "Python Programming Certification",
      file: p_c,
      type: "image",
      description: "Hope Foundation — passed final assessment"
    }
  };

  const openPopup = (certKey) => {
    setSelectedCertificate(certificates[certKey]);
  };

  const closePopup = () => {
    setSelectedCertificate(null);
  };

  // Check if file is PDF
  const isPDF = (filePath) => {
    return filePath?.toLowerCase().endsWith('.pdf');
  };

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

              {/* Show Button */}
              <button
                onClick={() => openPopup('degree')}
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                <Eye size={14} className="group-hover:scale-110 transition-transform" />
                Show Certificate
              </button>
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
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <BookOpen size={18} className="text-accent mt-0.5 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm">Web Development</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Online certification with assessment completion
                  </p>
                  {/* Show Button */}
                  <button
                    onClick={() => openPopup('webDev')}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors group"
                  >
                    <Eye size={12} className="group-hover:scale-110 transition-transform" />
                    Show Certificate
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <BookOpen size={18} className="text-accent mt-0.5 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm">Python Programming</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hope Foundation — passed final assessment
                  </p>
                  {/* Show Button */}
                  <button
                    onClick={() => openPopup('python')}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors group"
                  >
                    <Eye size={12} className="group-hover:scale-110 transition-transform" />
                    Show Certificate
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
              style={{ marginTop: '80px' }}
              onClick={(e) => e.stopPropagation()}
            >

              <div className="absolute popup_splash -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-rose-400 to-blue-500 blur-2xl transition-opacity duration-500"></div>
              <div className="absolute popup_splash -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 blur-2xl transition-opacity duration-500"></div>
              {/* <div className="absolute popup_splash -bottom-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 blur-2xl transition-opacity duration-500"></div>
              <div className="absolute popup_splash -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-rose-400 to-teal-500 blur-2xl transition-opacity duration-500"></div> */}

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute popup_close_btn top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10 text-white"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8 flex-shrink-0">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 pr-12">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCertificate.description}
                </p>
              </div>

              {/* Scrollable Content Container */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-6 md:pb-8">
                {isPDF(selectedCertificate.file) ? (
                  // PDF Viewer
                  <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <iframe
                      src={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="w-full min-h-screen"
                      title={selectedCertificate.title}
                      style={{
                        border: "none",
                        height: "100vh",
                      }}
                    />
                  </div>
                ) : (
                  // Image Viewer
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={selectedCertificate.file}
                      alt={selectedCertificate.title}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"/%3E%3Ctext x="50" y="300" font-family="Arial" font-size="20" fill="%23999"%3ECertificate Image%3C/text%3E%3Ctext x="50" y="330" font-family="Arial" font-size="14" fill="%23999"%3E(Not Found)%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                )}

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={closePopup}
                    className="px-6 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}