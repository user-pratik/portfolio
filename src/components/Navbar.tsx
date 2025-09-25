import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { User, Zap, MessageSquare, FolderOpen, Menu, X, Briefcase, Star, FileText } from 'lucide-react';

const Navbar = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated nav items with achievements and resume
  const navItems = [
    { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Technical Skills', icon: <Zap className="w-4 h-4" /> },
    { id: 'experience', label: 'Work Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Featured Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Star className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  // Enhanced navigation function with fallback scrolling
  const handleNavigation = (sectionId) => {
    // Close mobile menu immediately for better UX
    setMobileMenuOpen(false);
    
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      // Try the parent onNavigate function first
      if (onNavigate) {
        onNavigate(sectionId);
      }
      
      // Fallback: Direct scroll to element with offset for navbar
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        background: scrollY > 50 
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.9) 100%)'
          : 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)'
      }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between lg:justify-center">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center cursor-pointer lg:absolute lg:left-4 lg:sm:left-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('hero')} // Navigate to top/hero section
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <polygon
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                />
                <text 
                  x="50" 
                  y="60" 
                  textAnchor="middle" 
                  fill="#06b6d4" 
                  fontFamily="JetBrains Mono" 
                  fontSize="24" 
                  fontWeight="bold"
                >
                  P
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Center - Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 lg:-ml-20">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span className="hidden xl:block">{item.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right - Open to Work Indicator (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:flex items-center space-x-3 lg:absolute lg:right-4 lg:sm:right-6"
          >
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm font-inter font-medium text-green-400">
              Open to Work
            </span>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-text-secondary hover:text-cyan-400 transition-colors duration-200 bg-background/50 border border-border-subtle will-change-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.8
                  }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.8
                  }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl will-change-transform"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
          >
            <div className="container mx-auto px-6 py-6">
              {/* Open to Work - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center space-x-3 mb-4"
              >
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm font-inter font-medium text-green-400">
                  Open to Work
                </span>
              </motion.div>
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-left px-4 py-3 rounded-lg font-inter font-medium transition-colors duration-200 will-change-transform ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/5'
                    }`}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      delay: index * 0.05
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: { type: "spring", stiffness: 600, damping: 30 }
                    }}
                  >
                    <span className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;