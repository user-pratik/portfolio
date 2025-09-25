import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Briefcase, Code2, ExternalLink, FileText, Star } from 'lucide-react';

const AchievementsSection = () => {
  // Fixed intersection observer settings for navbar compatibility
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Increased threshold for better navbar detection
    rootMargin: '0px 0px -20% 0px' // Adjusted root margin for navbar compatibility
  });

  const achievements = [
    {
      id: 'e-thon',
      title: 'E-thon (IAIC @ VIT Chennai)',
      result: '1st Place',
      type: 'hackathon',
      date: 'August 29, 2025',
      icon: <Trophy className="w-6 h-6" />,
      color: 'neon-green',
      description: '1st Place — SCOPE School category at IAIC, hosted by VIT Chennai. Built a rapid prototype (~4 hours) of an autonomous docking mechanism for hospital infrastructure — a working hardware prototype demonstrating motor control and autonomous navigation. Felicitated by VIT leadership and industry guests. Focus: rapid prototyping, embedded motor control, systems integration.',
      highlights: ['Rapid prototyping in 4 hours', 'Hardware + software integration', 'Autonomous navigation', 'Healthcare focus'],
      certificateUrl: 'https://drive.google.com/file/d/1k3J3Psu7sBiwKybTvNH5WO7o9dgkGY_T/view?usp=sharing',
      certificateAlt: 'E-thon IAIC VIT Chennai First Place Certificate'
    },
    {
      id: 'hack4health',
      title: 'Hack4Health (Perfint Healthcare Ltd.)',
      result: '1st Place',
      type: 'hackathon',
      date: 'September 11-12, 2025',
      icon: <Trophy className="w-6 h-6" />,
      color: 'purple-accent',
      description: '1st Place — Hack4Health, organised by Perfint Healthcare Ltd., focused on hospital robotics infrastructure. Awarded 1st place and honored by the Perfint CEO; event ran under the HOD of AI & Robotics at my college. Focus: domain-specific robotics for healthcare, prototype productization, applied engineering.',
      highlights: ['Hospital robotics infrastructure', 'CEO recognition', 'Productized prototype', 'Healthcare domain expertise'],
      certificateUrl: 'https://drive.google.com/file/d/1iXeAOtm9W91g1ROow6TzJnpJg7uaRh_b/view?usp=sharing',
      certificateAlt: 'Hack4Health Perfint Healthcare First Place Certificate'
    }
  ];

  const CertificateCard = ({ achievement }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -2, scale: 1.02 }}
        className="bg-surface-light rounded-xl p-4 border border-border-subtle hover:border-neon-green/30 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-inter font-semibold text-text-primary">
              Certificate
            </span>
          </div>
          {achievement.certificateUrl && (
            <motion.a
              href={achievement.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs text-purple-accent hover:text-neon-green transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          )}
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-background/50 to-surface/80 rounded-lg border border-border-subtle flex items-center justify-center mb-3 group-hover:border-neon-green/20 transition-all duration-300">
          <motion.div
            className={`flex flex-col items-center space-y-2 ${
              achievement.certificateUrl 
                ? 'text-neon-green cursor-pointer' 
                : 'text-text-muted'
            }`}
            whileHover={achievement.certificateUrl ? { scale: 1.1 } : {}}
            onClick={() => {
              if (achievement.certificateUrl) {
                window.open(achievement.certificateUrl, '_blank');
              }
            }}
          >
            <FileText className="w-8 h-8" />
            <span className="text-xs font-inter text-center">
              {achievement.certificateUrl ? 'Click to view certificate' : 'Certificate pending'}
            </span>
          </motion.div>
        </div>
        
        <p className="text-xs text-text-secondary leading-relaxed">
          {achievement.result} — {achievement.title}
        </p>
      </motion.div>
    );
  };

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-surface/20">
      {/* Added a div with ref at the top of the section for better navbar detection */}
      <div ref={ref} className="absolute" style={{ top: '20%' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Achievements
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Recognition and milestones in hackathons, internships, and key projects
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-8 md:space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Background Glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${
                  achievement.color === 'neon-green' ? 'from-neon-green/10 to-neon-green/5' :
                  achievement.color === 'purple-accent' ? 'from-purple-accent/10 to-purple-accent/5' :
                  achievement.color === 'cyan-400' ? 'from-cyan-400/10 to-cyan-400/5' :
                  'from-yellow-400/10 to-yellow-400/5'
                } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              />
              
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-surface-light rounded-2xl p-6 md:p-8 border border-border-subtle group-hover:border-neon-green/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <motion.div
                          className="flex items-center space-x-3 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <motion.div
                            className={`p-3 rounded-lg ${
                              achievement.color === 'neon-green' ? 'bg-neon-green/10' :
                              achievement.color === 'purple-accent' ? 'bg-purple-accent/10' :
                              achievement.color === 'cyan-400' ? 'bg-cyan-400/10' :
                              'bg-yellow-400/10'
                            }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className={
                                achievement.color === 'neon-green' ? 'text-neon-green' :
                                achievement.color === 'purple-accent' ? 'text-purple-accent' :
                                achievement.color === 'cyan-400' ? 'text-cyan-400' :
                                'text-yellow-400'
                              }
                            >
                              {achievement.icon}
                            </motion.div>
                          </motion.div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-space font-bold text-text-primary">
                              {achievement.title}
                            </h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className={`text-base md:text-lg font-inter font-semibold ${
                                achievement.color === 'neon-green' ? 'text-neon-green' :
                                achievement.color === 'purple-accent' ? 'text-purple-accent' :
                                achievement.color === 'cyan-400' ? 'text-cyan-400' :
                                'text-yellow-400'
                              }`}>
                                {achievement.result}
                              </span>
                              <span className="text-sm text-text-muted">
                                {achievement.date}
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Type Badge */}
                        <motion.div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                            achievement.type === 'hackathon' ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' :
                            achievement.type === 'internship' ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' :
                            'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {achievement.type === 'hackathon' ? 'Hackathon Victory' :
                           achievement.type === 'internship' ? 'Professional Experience' :
                           'Technical Project'}
                        </motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="mb-6"
                    >
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <h4 className="text-sm font-inter font-semibold text-text-muted mb-3">
                        Key Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + index * 0.1 + highlightIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-background/50 px-3 py-1.5 rounded-lg border border-border-subtle hover:border-neon-green/30 transition-all duration-200"
                          >
                            <span className="text-xs text-text-secondary font-medium">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Certificate Card */}
                  <div className="lg:col-span-1">
                    <CertificateCard achievement={achievement} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;