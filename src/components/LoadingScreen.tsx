import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete the loading after one animation cycle (2 seconds)
    const timer = setTimeout(() => {
      setIsComplete(true);
      // Quick transition to main content
      setTimeout(onComplete, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={isComplete ? { 
            scale: 0.3, 
            x: typeof window !== 'undefined' ? -window.innerWidth * 0.4 : -400, 
            y: typeof window !== 'undefined' ? -window.innerHeight * 0.4 : -300 
          } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Main hexagon logo */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Hexagon outline - single animation cycle */}
              <motion.polygon
                points="50,10 85,30 85,70 50,90 15,70 15,30"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut"
                  // Removed repeat to ensure single cycle
                }}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                }}
              />
              
              {/* Center P letter */}
              <motion.text 
                x="50" 
                y="60" 
                textAnchor="middle" 
                fill="#06b6d4" 
                fontFamily="JetBrains Mono" 
                fontSize="24" 
                fontWeight="bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.8))'
                }}
              >
                P
              </motion.text>
            </svg>
          </div>
        </motion.div>

        {/* Loading text - properly centered below logo */}
        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p 
            className="text-text-secondary font-inter tracking-wider text-sm sm:text-base"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: 1 }} // Only repeat once for single cycle
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;