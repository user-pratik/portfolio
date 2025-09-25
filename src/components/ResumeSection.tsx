import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye, Star, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const ResumeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const downloadLink = 'https://drive.google.com/uc?export=download&id=1GrsE6P1rGjH-aWseDutgc8_ckgkT7NXo';
  const previewLink = 'https://drive.google.com/file/d/1GrsE6P1rGjH-aWseDutgc8_ckgkT7NXo/view?usp=drive_link';

  const handleDownload = () => {
    window.open(downloadLink, '_blank');
  };

  const handlePreview = () => {
    window.open(previewLink, '_blank');
  };

  const highlights = [
    'AI & Robotics Specialization',
    'Multiple Project Experiences',
    'Technical & Leadership Skills',
    'Academic Excellence'
  ];

  return (
    <section id="resume" className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Resume
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Download my comprehensive resume to explore my journey, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
        >
          {/* Subtle border glow effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-purple-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
                  
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-surface-light rounded-2xl p-6 md:p-8 lg:p-12 border border-border-subtle hover:border-neon-green/30 transition-all duration-300 overflow-hidden"
          >
            {/* Minimal background decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-neon-green/5 rounded-full opacity-50" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-purple-accent/5 rounded-lg rotate-45 opacity-50" />
                    
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 md:space-y-8">
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="bg-neon-green/10 p-3 md:p-4 rounded-xl"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FileText className="w-6 md:w-8 h-6 md:h-8 text-neon-green" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary">
                        My Resume
                      </h3>
                      <p className="text-sm md:text-base text-text-muted">
                        AI & Robotics Engineer
                      </p>
                    </div>
                  </motion.div>

                  <div className="space-y-4 md:space-y-6">
                    <motion.h4
                      className="text-base md:text-lg font-inter font-semibold text-purple-accent"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      Key Highlights:
                    </motion.h4>
                    <div className="space-y-3">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -15 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                          whileHover={{ x: 4 }}
                          className="flex items-center space-x-3 py-1 hover:bg-neon-green/5 rounded-lg px-2 -mx-2 transition-all duration-200"
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm md:text-base text-text-secondary">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 md:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 }}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={handleDownload}
                        className="w-full bg-gradient-to-r from-neon-green to-neon-green-dim hover:from-neon-green-dim hover:to-neon-green text-background font-inter font-semibold px-4 md:px-6 py-4 md:py-6 rounded-xl transition-all duration-300 group/btn"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                        </motion.div>
                        Download Resume
                      </Button>
                    </motion.div>
                                        
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={handlePreview}
                        variant="outline"
                        className="w-full border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-background font-inter font-semibold px-4 md:px-6 py-4 md:py-6 rounded-xl transition-all duration-300 group/btn"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Eye className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                        </motion.div>
                        Preview Online
                        <motion.div
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right Content - Resume Preview (Hidden on mobile, visible on desktop) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="hidden lg:flex justify-center lg:justify-end"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Resume mockup with hover effect */}
                    <motion.div
                      className="bg-background rounded-xl p-4 md:p-6 shadow-lg border border-border-subtle max-w-xs hover:shadow-xl transition-shadow duration-300"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)"
                      }}
                    >
                      <div className="space-y-3">
                        {/* Header */}
                        <motion.div
                          className="text-center border-b border-border-subtle pb-3"
                          whileHover={{ borderColor: "rgba(6, 182, 212, 0.3)" }}
                        >
                          <motion.div
                            className="w-10 md:w-12 h-10 md:h-12 bg-neon-green/20 rounded-full mx-auto mb-2"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <div className="h-2.5 md:h-3 bg-text-muted/20 rounded w-3/4 mx-auto mb-1" />
                          <div className="h-1.5 md:h-2 bg-text-muted/10 rounded w-1/2 mx-auto" />
                        </motion.div>
                                                
                        {/* Sections with staggered animation */}
                        {[1, 2, 3, 4].map((section, index) => (
                          <motion.div
                            key={section}
                            className="space-y-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.0 + index * 0.1 }}
                          >
                            <motion.div
                              className="h-1.5 md:h-2 bg-neon-green/30 rounded w-1/3"
                              whileHover={{ scaleX: 1.1 }}
                              transition={{ duration: 0.2 }}
                            />
                            <div className="space-y-1">
                              <div className="h-1 md:h-1.5 bg-text-muted/20 rounded w-full" />
                              <div className="h-1 md:h-1.5 bg-text-muted/20 rounded w-4/5" />
                              <div className="h-1 md:h-1.5 bg-text-muted/20 rounded w-3/5" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Subtle floating elements */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green/40 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-accent/40 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
