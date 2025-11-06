import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Shield, Eye, Network, Gamepad2, Server, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const projects = [
    {
      title: 'End-to-End Document Redaction App',
      description: 'Flask application using OCR and custom-trained detection models for automated sensitive data detection and redaction. Provides comprehensive document privacy protection with high accuracy.',
      tech: ['Flask', 'OCR', 'Machine Learning', 'Python', 'Computer Vision', 'Data Privacy'],
      github: 'https://github.com/user-pratik/document-redaction',
      icon: Eye,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Smart Up Arrow',
      description: 'Lightweight shell enhancement that makes ↑/↓ perform prefix-based history search across Bash, Zsh, and PowerShell — no background daemons, just simple keybindings and install scripts.',
      tech: ['Bash', 'Zsh', 'PowerShell', 'PSReadLine', 'Keybindings', 'Shell Utilities'],
      github: 'https://github.com/user-pratik/smart-up-arrow',
      icon: ArrowUpRight,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      title: 'AprilTag Tracking with OpenCV',
      description: 'Real-time AprilTag detection and tracking using OpenCV and pupil-apriltags. Detects tag corners and center, computes offsets from image center, provides arrow guidance and estimates angle/distance using pinhole camera geometry.',
      tech: ['OpenCV', 'pupil-apriltags', 'Computer Vision', 'Python', 'Real-time', 'Camera'],
      github: 'https://github.com/user-pratik/apriltag-tracking',
      icon: Network,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Nutrition Tracker',
      description: 'Full-stack nutrition tracker built with Next.js 14, Supabase, and Tailwind CSS. Log meals, track nutrients, and get AI-assisted meal recommendations with a modern, responsive UI.',
      tech: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'TypeScript', 'ShadCN UI', 'Full-Stack'],
      github: 'https://github.com/user-pratik/nutrition-tracker',
      icon: Server,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      title: 'Alemeno Credit Approval System',
      description: 'Production-ready Django REST API for customer registration, loan approvals, and EMI calculations. Containerized with Docker, uses PostgreSQL, and supports background data ingestion for scalable workflows.',
      tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Background Ingestion', 'API'],
      github: 'https://github.com/sseth345/alemeno_credit_backend',
      icon: Server,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20'
    },
    {
      title: 'Real-Time Gender-Based Alert System',
      description: 'Object detection system with scalable server architecture featuring police alert integration. Provides real-time monitoring and emergency response capabilities for enhanced security.',
      tech: ['Object Detection', 'Real-time Processing', 'Alert System', 'Computer Vision', 'Emergency Response'],
      github: 'https://github.com/user-pratik/gender-alert-system',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      title: 'Intelligent Network Firewall',
      description: 'Real-time firewall leveraging packet filtering and machine learning for anomaly detection and proactive threat blocking. Advanced cybersecurity solution with intelligent threat analysis.',
      tech: ['Machine Learning', 'Network Security', 'Packet Filtering', 'Anomaly Detection', 'Python', 'Cybersecurity'],
      github: 'https://github.com/user-pratik/intelligent-firewall',
      icon: Network,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'AI-Powered Word-Guessing Game',
      description: 'Interactive game built with React + Express, integrating dynamic question answering via AI models. Features intelligent gameplay mechanics and responsive user interface.',
      tech: ['React.js', 'Express.js', 'AI Integration', 'Node.js', 'Interactive Gaming', 'API Integration'],
      github: 'https://github.com/user-pratik/ai-word-game',
      icon: Gamepad2,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      title: 'Full-Stack Service Platform',
      description: 'Comprehensive React + Node.js application with payment gateway integration, real-time messaging, and database support for scalable service delivery.',
      tech: ['React.js', 'Node.js', 'Payment Gateway', 'Real-time Messaging', 'Database', 'Full-Stack'],
      github: 'https://github.com/user-pratik/service-platform',
      icon: Server,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ x: -50 }}
          animate={inView ? { x: 0 } : { x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Innovative full-stack and AI solutions that showcase expertise in modern technology and problem-solving
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ x: -60, scale: 0.95 }}
              animate={inView ? { x: 0, scale: 1 } : { x: -60, scale: 0.95 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Minimalistic card with subtle border animation */}
              <div className="relative bg-surface-light rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border-subtle overflow-hidden transition-all duration-500 ease-out hover:border-neon-green/30">
                
                {/* Subtle top accent line that expands on hover */}
                <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-neon-green to-purple-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                
                {/* Content container */}
                <div className="relative z-10">
                  <div className="flex flex-col space-y-6">
                    
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className={`${project.bgColor} p-3 rounded-xl self-start transition-all duration-300 group-hover:scale-105`}>
                        <project.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${project.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-space font-bold text-text-primary mb-3 transition-colors duration-300 group-hover:text-neon-green">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Tech stack and button section */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 flex-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 text-xs font-mono bg-background/40 text-text-muted rounded-md border border-border-subtle transition-all duration-300 hover:border-neon-green/30 hover:text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* GitHub button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-shrink-0"
                      >
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          className="w-full sm:w-auto bg-transparent border border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50 font-inter font-medium px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 group/btn"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">View Code</span>
                          <span className="sm:hidden">Code</span>
                          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ x: -40 }}
          animate={inView ? { x: 0 } : { x: -40 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 sm:mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-space font-semibold text-purple-accent mb-8 sm:mb-12">
            Services I Offer
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              'Full-Stack Web Development (React, Node.js, Express)',
              'AI/ML Solutions & Computer Vision Applications',
              'AWS Cloud Architecture & Deployment',
              'Document Processing & Automation Systems'
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ x: -30, scale: 0.9 }}
                animate={inView ? { x: 0, scale: 1 } : { x: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.08,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-surface-light rounded-xl p-5 sm:p-6 border border-border-subtle transition-all duration-300 hover:border-neon-green/30 h-full"
                >
                  
                  {/* Minimalistic top indicator */}
                  <div className="h-1 w-6 bg-gradient-to-r from-neon-green to-purple-accent rounded-full mb-4 mx-auto transition-all duration-300 group-hover:w-10" />
                  
                  <p className="text-sm sm:text-base text-text-secondary font-inter text-center leading-relaxed">
                    {service}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;