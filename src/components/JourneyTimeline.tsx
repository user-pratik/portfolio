import { motion } from "framer-motion";
import { Trophy, Briefcase, Code2 } from "lucide-react";

const JourneyTimeline = ({ shouldAnimate }) => {
  const timelineEvents = [
    {
      year: 'Apr 2025',
      title: 'Innovate x Impact Hackathon (V-nest) — Organized & Co-hosted',
      description: 'Co-hosted and organized a university-wide hackathon in collaboration with V-nest, facilitating workshops, mentoring teams, and managing event logistics.',
      type: 'hackathon',
      icon: <Trophy className="w-4 h-4" />,
      color: 'yellow-400'
    },
    {
      year: 'May 2025 – Present',
      title: 'Tech Lead @ Cloudops',
      description: 'Led teams to conduct seminars and informational events, driving technical growth and community engagement.',
      type: 'internship',
      icon: <Code2 className="w-4 h-4" />,
      color: 'cyan-400'
    },
    {
      year: 'Aug 2025',
      title: 'E-thon (IAIC @ VIT Chennai) — 1st Place',
      description: 'Developed an autonomous medical unit with a user-friendly interface that scans surgical equipment, delivers required tools to surgeons during operations, and autonomously returns via a sanitization zone to its start station.',
      type: 'hackathon',
      icon: <Trophy className="w-4 h-4" />,
      color: 'neon-green'
    },
    {
      year: 'Sep 2025',
      title: 'Hack4Health (Perfint Healthcare Ltd.) — 1st Place',
      description: 'Internship-style hackathon on autonomous docking mechanism for hospital infrastructure (hardware + motor control + autonomous navigation).; felicitated by Perfint CEO.',
      type: 'hackathon',
      icon: <Trophy className="w-4 h-4" />,
      color: 'purple-accent'
    },
    
    {
      year: 'May 2025 – Jul 2025',
      title: 'VIT Chennai — AI Intern',
      description: 'Fine-tuned AI models and built a RAG pipeline for university-level question generation, incorporating data collection, cleaning, mark distribution, context, and Bloom’s Taxonomy.',
      type: 'internship',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'purple-accent'
    },
    {
      year: 'May 2025 – Present',
      title: 'Mindmach Technologies — Full-Stack Intern',
      description: [
        'Integrated DynamoDB for efficient KV-pair storage, improving query latency by ~20%.',
        'Deployed AWS Bedrock AI to automate JD creation, reducing user effort by ~40%.',
        'Delivered a production-ready release with a remote team across 5 states.'
      ].join(' '),
      type: 'internship',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'cyan-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="mt-12 md:mt-16"
    >
      {/* Timeline Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        className="text-center mb-8 md:mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-neon-green mb-4">
          My Journey Timeline
        </h3>
        <motion.div 
          className="w-16 h-0.5 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-4"
          initial={{ scaleX: 0 }}
          animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }}
        />
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          Key milestones and achievements in my robotics and AI journey
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-purple-accent to-cyan-400"
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={shouldAnimate ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ delay: 1.1, duration: 1.2, ease: "easeOut" }}
        />

        {/* Timeline Events */}
        <div className="space-y-8 md:space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ 
                delay: 1.2 + index * 0.2, 
                duration: 0.6, 
                ease: "easeOut" 
              }}
              className={`relative flex items-center ${
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline Node */}
              <motion.div
                className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-8 h-8 rounded-full border-2 ${
                  event.color === 'neon-green' ? 'border-neon-green' :
                  event.color === 'purple-accent' ? 'border-purple-accent' :
                  event.color === 'cyan-400' ? 'border-cyan-400' :
                  'border-yellow-400'
                } bg-surface-light flex items-center justify-center`}
                whileHover={{ 
                  // scale: 1.2,
                  // x: index % 2 === 0 ? 40 : -40, // Move opposite to card direction
                  boxShadow: event.color === 'neon-green' 
                    ? '0 0 20px rgba(34,197,94,0.6)' 
                    : event.color === 'purple-accent' 
                      ? '0 0 20px rgba(147,51,234,0.6)'
                      : event.color === 'cyan-400'
                        ? '0 0 20px rgba(34,211,238,0.6)'
                        : '0 0 20px rgba(250,204,21,0.6)'
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.4
                }}
              >
                <motion.div
                  className={
                    event.color === 'neon-green' ? 'text-neon-green' :
                    event.color === 'purple-accent' ? 'text-purple-accent' :
                    event.color === 'cyan-400' ? 'text-cyan-400' :
                    'text-yellow-400'
                  }
                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    duration: 0.5 
                  }}
                >
                  {event.icon}
                </motion.div>
              </motion.div>

              {/* Event Card */}
              <motion.div
                className={`
                  ml-16 md:ml-0 
                  ${index % 2 === 0 
                    ? 'md:mr-1/2 md:pr-8' 
                    : 'md:ml-1/2 md:pl-8'
                  } 
                  w-full md:w-1/2 group
                `}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Card Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 ${
                    event.color === 'neon-green' ? 'bg-gradient-to-r from-neon-green/10 to-neon-green/5' :
                    event.color === 'purple-accent' ? 'bg-gradient-to-r from-purple-accent/10 to-purple-accent/5' :
                    event.color === 'cyan-400' ? 'bg-gradient-to-r from-cyan-400/10 to-cyan-400/5' :
                    'bg-gradient-to-r from-yellow-400/10 to-yellow-400/5'
                  } rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                <div className={`
                  relative bg-surface-light rounded-xl p-4 md:p-6 
                  border border-border-subtle ${
                    event.color === 'neon-green' ? 'border-l-4 border-l-neon-green' :
                    event.color === 'purple-accent' ? 'border-l-4 border-l-purple-accent' :
                    event.color === 'cyan-400' ? 'border-l-4 border-l-cyan-400' :
                    event.color === 'yellow-400' ? 'border-l-4 border-l-yellow-400' : ''
                  }
                `}>
                  {/* Year Badge - Static & Minimal */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      event.color === 'neon-green' ? 'bg-neon-green/10 text-neon-green border border-neon-green/20' :
                      event.color === 'purple-accent' ? 'bg-purple-accent/10 text-purple-accent border border-purple-accent/20' :
                      event.color === 'cyan-400' ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' :
                      'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
                    }`}
                  >
                    {event.year}
                  </div>

                  {/* Event Type Badge - Static & Minimal */}
                  {(event.type === 'hackathon' || event.type === 'internship') && (
                    <div
                      className={`inline-block ml-2 px-2 py-0.5 rounded text-xs font-medium ${
                        event.type === 'hackathon' 
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                          : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                      }`}
                    >
                      {event.type === 'hackathon' ? 'Hackathon Win' : 'Internship'}
                    </div>
                  )}

                  <h4 className={`text-lg md:text-xl font-space font-bold mb-2 leading-tight ${
                    event.color === 'neon-green' ? 'text-neon-green' :
                    event.color === 'purple-accent' ? 'text-purple-accent' :
                    event.color === 'cyan-400' ? 'text-cyan-400' :
                    'text-yellow-400'
                  }`}>
                    {event.title}
                  </h4>
                  
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {event.description}
                  </p>

                  {/* Subtle accent line */}
                  <motion.div
                    className={`mt-4 h-0.5 ${
                      event.color === 'neon-green' ? 'bg-gradient-to-r from-neon-green/30' :
                      event.color === 'purple-accent' ? 'bg-gradient-to-r from-purple-accent/30' :
                      event.color === 'cyan-400' ? 'bg-gradient-to-r from-cyan-400/30' :
                      'bg-gradient-to-r from-yellow-400/30'
                    } to-transparent`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JourneyTimeline;