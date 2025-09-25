import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Download, Globe } from 'lucide-react';

const profilePhoto = 'https://i.postimg.cc/8C9VCjLR/1754068653115.jpg';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [isTextFilled, setIsTextFilled] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = useMemo(() => [
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Cloud Solutions Architect', 
    'Tech Lead'
  ], []);

  // Role typing and erasing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing animation
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        // Move to next role and start typing
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  useEffect(() => {
    const fillTimer = setTimeout(() => setIsTextFilled(true), 1000);
    const particleTimer = setTimeout(() => setShowParticles(true), 2500);
    
    return () => {
      clearTimeout(fillTimer);
      clearTimeout(particleTimer);
    };
  }, []);

  const socialLinks = [
    { 
      icon: Mail, 
      href: 'mailto:pratikanand.tech@gmail.com',
      label: 'Gmail',
      color: 'hover:text-red-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/introducingpratikanand',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Github, 
      href: 'https://github.com/user-pratik',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    { 
      icon: Globe, 
      href: 'https://user-pratik.github.io/portfolio/',
      label: 'Portfolio',
      color: 'hover:text-neon-green'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-20 px-4 sm:px-6 lg:px-12 relative">
      {/* Particle Background */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-green rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg font-inter text-text-secondary tracking-wide"
            >
              Hello, I'm
            </motion.p>

            {/* Name with Liquid Fill Effect */}
            <div className="space-y-2 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black text-text-primary relative overflow-hidden">
                  PRATIK
                  {/* Liquid Fill Overlay */}
                  <motion.div
                    className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black text-neon-green"
                    initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                    animate={isTextFilled ? { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    PRATIK
                  </motion.div>
                </h1>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-text-primary"
              >
                ANAND
              </motion.h2>
            </div>

            {/* Dynamic Role with Fixed Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4 max-w-xl"
            >
              <div className="min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center lg:justify-start">
                <div className="text-xl sm:text-2xl lg:text-3xl font-space font-semibold text-purple-accent flex items-center">
                  <span>{displayedText}</span>
                  <motion.span
                    className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-purple-accent ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg font-inter text-text-secondary leading-relaxed">
                Passionate Full-Stack Developer specializing in AI-powered applications and cloud solutions. 
                Building scalable, innovative systems that solve real-world problems with cutting-edge technology.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-text-muted">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-xs sm:text-sm">pratikanand.tech@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-xs sm:text-sm">+91-7903956084 • VIT Chennai</span>
              </div>
            </motion.div>

            {/* Social Links and Resume Button - Now inline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-text-secondary icon-snap tap-highlight ${social.color} transition-all duration-300 p-2`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Divider - visible only on larger screens */}
              <div className="hidden sm:block w-px h-8" />

              {/* Resume Button - Direct Download */}
              <motion.a
                href="https://drive.google.com/file/d/1GrsE6P1rGjH-aWseDutgc8_ckgkT7NXo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download="Pratik_Anand_Resume.pdf"
                className="group relative bg-gradient-to-r from-neon-green to-purple-accent p-[1px] rounded-lg overflow-hidden inline-flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-background px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center space-x-2 group-hover:bg-background/90 transition-all duration-300">
                  <Download className="w-4 h-4 text-neon-green" />
                  <span className="font-inter font-semibold text-sm sm:text-base text-text-primary group-hover:text-neon-green transition-colors duration-300">
                    Resume
                  </span>
                </div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-green via-purple-accent to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    background: [
                      'linear-gradient(0deg, #39ff14, #9333ea, #39ff14)',
                      'linear-gradient(360deg, #39ff14, #9333ea, #39ff14)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ zIndex: -1 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-8 lg:mt-0 lg:justify-end w-full"
          >
            <div className="relative flex justify-center">
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-neon-green/30 to-purple-accent/30 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity },
                  opacity: { duration: 3, repeat: Infinity }
                }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative bg-surface-light rounded-2xl sm:rounded-3xl p-2 border border-neon-green/30 overflow-hidden mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Pratik Anand"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-xl sm:rounded-2xl block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-neon-green rounded-full shadow-lg shadow-neon-green/50"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-purple-accent rounded-full shadow-lg shadow-purple-accent/50"
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;