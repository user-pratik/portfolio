import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import WorkExperienceSection from './WorkExperienceSection';
import ProjectsSection from './ProjectsSection';
import ResumeSection from './ResumeSection';
import ContactSection from './ContactSection';
import CursorGlow from './CursorGlow';
import AchievementsSection from './AchievementsSection';
import JourneyTimeLine from './JourneyTimeline';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Updated sections array to match new order
      const sections = ['hero', 'about', 'skills', 'experience', 'projects','achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-parallax-gradient text-text-primary overflow-x-hidden">
      <CursorGlow />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
          
          <main>
            {/* Hero Section */}
            <HeroSection onNavigate={handleNavigate} />
            
            {/* About Section */}
            <AboutSection />

            {/* JourneyTimeLine*/}
            <JourneyTimeLine shouldAnimate={true} />

            {/* Whitespace between timeline and skills */}
            <div className="my-12" />

            {/* Skills Section */}
            <SkillsSection />
            
            {/* Work Experience Section */}
            <WorkExperienceSection />
            
            {/* Projects Section */}
            <ProjectsSection />

            {/* Achievements Section */}
            <AchievementsSection />
            
            {/* Resume Section */}
            <ResumeSection />
            
            {/* Contact Section */}
            <ContactSection />
          </main>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;