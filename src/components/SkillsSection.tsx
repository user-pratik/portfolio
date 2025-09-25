import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Globe,
  Cpu,
  Brain,
  MessageCircle,
  Lightbulb,
  Code,
  FileText,
  Zap,
  Terminal,
  Palette,
  GitBranch,
  Database,
  Layers,
  Settings,
  Eye,
  Wrench,
  Monitor,
  Box,
  Workflow,
  Search,
  Navigation,
  Camera,
  BarChart3,
  TrendingUp,
  Network,
  Atom,
  Sparkles,
  Target,
  ScanLine,
  Trophy,
  Coffee,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Gamepad2
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: 'text-blue-400',
      skills: [
        { name: 'C++', icon: <Code2 className="w-4 h-4" /> },
        { name: 'Python', icon: <Code2 className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <FileText className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <Code className="w-4 h-4" /> },
        { name: 'Flutter/Dart', icon: <Smartphone className="w-4 h-4" /> },
        { name: 'Java', icon: <Code2 className="w-4 h-4" /> }
      ],
      bgColor: 'bg-blue-500/5',
      borderColor: 'border-blue-500/20'
    },
    {
      category: 'Web Development',
      icon: Globe,
      color: 'text-green-400',
      skills: [
        { name: 'React.js', icon: <Layers className="w-4 h-4" /> },
        { name: 'Express.js', icon: <Server className="w-4 h-4" /> },
        { name: 'Flask', icon: <Server className="w-4 h-4" /> },
        { name: 'Phoenix', icon: <Server className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
        { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
        { name: 'HTML5/CSS3', icon: <Globe className="w-4 h-4" /> },
        { name: 'Responsive Design', icon: <Smartphone className="w-4 h-4" /> }
      ],
      bgColor: 'bg-green-500/5',
      borderColor: 'border-green-500/20'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-orange-400',
      skills: [
        { name: 'AWS (DynamoDB, S3, Bedrock, CloudFront)', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Azure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Docker', icon: <Box className="w-4 h-4" /> },
        { name: 'Git/GitHub', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'Linux CLI', icon: <Terminal className="w-4 h-4" /> },
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'DynamoDB', icon: <Database className="w-4 h-4" /> }
      ],
      bgColor: 'bg-orange-500/5',
      borderColor: 'border-orange-500/20'
    },
    {
      category: 'AI/ML & Computer Vision',
      icon: Brain,
      color: 'text-purple-400',
      skills: [
        { name: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
        { name: 'Computer Vision', icon: <Camera className="w-4 h-4" /> },
        { name: 'Generative AI', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'OCR', icon: <ScanLine className="w-4 h-4" /> },
        { name: 'Object Detection', icon: <Target className="w-4 h-4" /> },
        { name: 'IoT Systems', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Data Processing', icon: <BarChart3 className="w-4 h-4" /> }
      ],
      bgColor: 'bg-purple-500/5',
      borderColor: 'border-purple-500/20'
    }
  ];

  const skillLevels = [
    {
      name: 'Full-Stack Development',
      level: 80,
      icon: Globe,
      color: 'text-green-400',
      bgColor: 'bg-green-400',
      language: 'React, Node.js, Express',
      description: 'End-to-end web application development with modern frameworks'
    },
    {
      name: 'Cloud Architecture',
      level: 65,
      icon: Cloud,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400',
      language: 'AWS, Azure, Docker',
      description: 'Scalable cloud solutions with AWS services integration'
    },
    {
      name: 'AI/ML Development',
      level: 60,
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400',
      language: 'Python, ML Frameworks',
      description: 'Machine learning models, computer vision, and AI applications'
    },
    {
      name: 'Problem Solving',
      level: 88,
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400',
      language: 'C++, Python, Algorithms',
      description: 'Data structures, algorithms, and competitive programming'
    }
  ];

  const softSkills = [
    {
      icon: Settings,
      label: 'Leadership',
      description: 'Tech Lead at Cloudops, organizing hackathons and leading teams',
      color: 'text-pink-400'
    },
    {
      icon: MessageCircle,
      label: 'Communication',
      description: 'Conducting seminars and collaborative remote team work',
      color: 'text-cyan-400'
    },
    {
      icon: Lightbulb,
      label: 'Innovation',
      description: 'Creative problem-solving in AI, web development, and automation',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-surface/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Technical Skills
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, innovative solutions across web development, cloud, and AI
          </p>
        </motion.div>

        {/* Skill Level Meters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-space font-semibold text-purple-accent mb-8 md:mb-12 text-center">
            Expertise Level
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-surface-light rounded-xl p-6 md:p-8 border border-border-subtle hover:border-neon-green/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-background/50 p-2 rounded-lg">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-space font-semibold text-text-primary">
                        {skill.name}
                      </h4>
                      <p className="text-xs font-mono text-text-muted">
                        {skill.language}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-orbitron font-bold text-neon-green">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="w-full bg-background/50 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.bgColor} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    >
                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={inView ? { x: '200%' } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: 1.8 + index * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Grid - Now 2x2 layout on large screens */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card with subtle hover effect */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`bg-surface-light rounded-xl p-6 md:p-8 border ${category.borderColor} hover:border-neon-green/40 transition-all duration-300 h-full`}
              >
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className={`${category.bgColor} p-2.5 rounded-lg`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-space font-semibold text-text-primary">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.1) + (skillIndex * 0.02) 
                      }}
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-background/30 transition-all duration-200 cursor-default"
                    >
                      <span className="text-text-muted flex-shrink-0">
                        {skill.icon}
                      </span>
                      <span className="text-sm text-text-secondary font-mono">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-space font-semibold text-purple-accent mb-8 md:mb-12">
            Soft Skills & Leadership
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-surface-light rounded-xl p-6 md:p-8 border border-border-subtle hover:border-purple-accent/30 transition-all duration-300 group"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className={`w-8 h-8 ${skill.color} mx-auto`} />
                </motion.div>
                <h4 className="text-base md:text-lg font-inter font-semibold text-text-primary mb-2">
                  {skill.label}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;