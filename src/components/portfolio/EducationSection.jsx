import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  GraduationCap,
  Award,
  BookOpen,
  Eye,
  X,
  FileText,
  Calendar,
  MapPin,
  Star,
  CheckCircle,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCw
} from "lucide-react";
import d_c from "../../../public/Certificates/Degree_long_memo.jpg";
import p_c from "../../../public/Certificates/PythonCertificate.pdf";

export default function EducationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const certificates = {
    pg: {
      id: 'pg',
      title: "M.Sc. Computer Science",
      subtitle: "Post Graduate Certificate",
      file: "/path-to-your-web-certificate.jpg",
      type: "image",
      description: "Master of Science in Computer Science",
      institution: "Government City College, O.U",
      year: "2023",
      grade: "CGPA: 7.1/10",
      icon: GraduationCap,
      color: "primary"
    },
    degree: {
      id: 'degree',
      title: "B.Sc. (MECS)",
      subtitle: "Degree Certificate",
      file: d_c,
      type: "image",
      description: "Bachelor of Science in Mathematics, Electronics & Computer Science",
      institution: "SR & BGNR Govt. Arts & Science College, K.U",
      year: "2021",
      grade: "CGPA: 7.32/10",
      icon: GraduationCap,
      color: "primary"
    },
    webDev: {
      id: 'webDev',
      title: "Web Development",
      subtitle: "Professional Certification",
      file: "/path-to-your-web-certificate.jpg",
      type: "image",
      description: "Online certification with assessment completion",
      institution: "Online Platform",
      year: "2023",
      grade: "Completed",
      icon: Award,
      color: "accent"
    },
    python: {
      id: 'python',
      title: "Python Programming",
      subtitle: "Certification",
      file: p_c,
      type: "pdf",
      description: "Hope Foundation — passed final assessment",
      institution: "Hope Foundation",
      year: "2023",
      grade: "Passed",
      icon: Award,
      color: "accent"
    }
  };

  const openPopup = async (certKey) => {
    setIsLoading(true);
    setSelectedCertificate(certificates[certKey]);
    setIsFullscreen(false);
    setZoomLevel(1);
    setRotation(0);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closePopup = () => {
    setSelectedCertificate(null);
    setIsLoading(false);
    setIsFullscreen(false);
    setZoomLevel(1);
    setRotation(0);
  };

  const isPDF = (filePath) => {
    return filePath?.toLowerCase().endsWith('.pdf');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        closePopup();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  return (
    <section id="education" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full from-primary/10 to-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <SectionHeading title="Education & Certifications" subtitle="// my background" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {['pg', 'degree'].map((key, index) => {
                const cert = certificates[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary/30 pl-6 relative"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-background" />

                    <h4 className="font-display font-semibold text-lg text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <MapPin size={14} className="shrink-0" />
                      {cert.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Calendar size={12} />
                        {cert.year}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                        <Star size={12} className="text-yellow-500" />
                        {cert.grade}
                      </span>
                    </div>

                    {/* <button
                      onClick={() => openPopup(key)}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors group/btn"
                    >
                      <Eye size={14} className="group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </button> */}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                <Award size={22} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {['webDev', 'python'].map((key, index) => {
                const cert = certificates[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300 group/cert"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover/cert:bg-accent/20 transition-colors duration-300">
                      <BookOpen size={18} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                        {cert.title}
                        <CheckCircle size={12} className="text-green-500" />
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-[10px] font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                          {cert.year}
                        </span>
                        <button
                          onClick={() => openPopup(key)}
                          className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors group/btn"
                        >
                          <Eye size={12} className="group-hover/btn:scale-110 transition-transform" />
                          View
                        </button>
                      </div>
                    </div>
                    {/* {isPDF(cert.file) && (
                      <FileText size={14} className="text-muted-foreground opacity-50" />
                    )} */}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Popup Modal with Zoom Controls */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full from-card via-card to-card/95 rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col transition-all duration-300 ${isFullscreen ? 'max-h-[95vh] max-w-[95vw]' : 'max-w-5xl max-h-[80vh]'
                }`}
              style={{ marginTop: '80px' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full from-primary/20 to-accent/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full from-accent/20 to-primary/20 blur-3xl" />
              </div>

              {/* Header */}
              <div className="relative flex-shrink-0 p-4 md:p-6 border-b border-white/5 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedCertificate.subtitle}
                    </p>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <MapPin size={14} />
                        {selectedCertificate.institution}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Calendar size={14} />
                        {selectedCertificate.year}
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Star size={12} className="text-yellow-500" />
                        {selectedCertificate.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {!isPDF(selectedCertificate.file) && (
                      <>
                        {/* Zoom Controls */}
                        <button
                          onClick={handleZoomOut}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110"
                          title="Zoom Out"
                        >
                          <ZoomOut size={16} />
                        </button>
                        <span className="text-xs text-white/60 min-w-[40px] text-center">
                          {Math.round(zoomLevel * 100)}%
                        </span>
                        <button
                          onClick={handleZoomIn}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110"
                          title="Zoom In"
                        >
                          <ZoomIn size={16} />
                        </button>
                        <button
                          onClick={handleRotate}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110"
                          title="Rotate"
                        >
                          <RotateCw size={16} />
                        </button>
                        <button
                          onClick={handleResetView}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110 text-xs px-3"
                          title="Reset View"
                        >
                          Reset
                        </button>
                      </>
                    )}
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110"
                      title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                    >
                      {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    </button>
                    <button
                      onClick={closePopup}
                      className="p-2 popup_close_btn rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white hover:scale-110"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area with Enhanced Visibility */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 relative">
                {isLoading ? (
                  <div className="flex items-center justify-center min-h-[400px]">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-inner">
                      {isPDF(selectedCertificate.file) ? (
                        <div className="relative">
                          <iframe
                            src={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                            className="w-full min-h-[500px] md:min-h-[600px]"
                            title={selectedCertificate.title}
                          />
                          <div
                            className="absolute inset-0 cursor-default"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>
                      ) : (
                        <div
                          className="relative flex items-center justify-center p-4 bg-black/20 min-h-[400px]"
                          style={{
                            background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)'
                          }}
                        >
                          <div
                            className="relative"
                            style={{
                              transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              maxWidth: '100%',
                              maxHeight: '70vh'
                            }}
                          >
                            <img
                              src={selectedCertificate.file}
                              alt={selectedCertificate.title}
                              className="w-auto h-auto max-w-full max-h-[70vh] object-contain select-none rounded-lg shadow-2xl"
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                              style={{
                                imageRendering: 'high-quality',
                                boxShadow: '0 0 60px rgba(0,0,0,0.5)'
                              }}
                              onError={(e) => {
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%231a1a1a"/%3E%3Ctext x="50" y="300" font-family="Arial" font-size="20" fill="%23666"%3ECertificate Image%3C/text%3E%3Ctext x="50" y="330" font-family="Arial" font-size="14" fill="%23444"%3E(Not Found)%3C/text%3E%3C/svg%3E';
                              }}
                            />
                          </div>

                          {/* Subtle zoom indicator */}
                          {zoomLevel !== 1 && (
                            <div className="absolute top-4 left-4 bg-black/70 text-white/80 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                              {Math.round(zoomLevel * 100)}%
                            </div>
                          )}

                          {/* Overlay to prevent right-click */}
                          <div
                            className="absolute inset-0 cursor-default"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>
                      )}
                    </div>

                    {/* View-only footer */}
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-muted-foreground/50 flex items-center gap-2">
                        <Eye size={12} />
                        View only • Protected
                        {!isPDF(selectedCertificate.file) && (
                          <span className="text-[10px] opacity-50">
                            • Zoom: {Math.round(zoomLevel * 100)}% • Rotate: {rotation}°
                          </span>
                        )}
                      </p>
                      <div className="flex items-center gap-3">
                        {!isPDF(selectedCertificate.file) && (
                          <span className="text-[10px] text-muted-foreground/30">
                            Scroll to zoom • Drag to pan
                          </span>
                        )}
                        <button
                          onClick={closePopup}
                          className="px-6 py-2 rounded-lg bg-white/5 text-foreground hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}