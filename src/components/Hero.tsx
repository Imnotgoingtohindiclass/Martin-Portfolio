import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onEnter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4 glitch neon-glow">
          MARTIN FUN
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          COMPUTING STUDENT & DEVELOPER
        </p>
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-white rounded-full font-medium animate-pulse-slow"
        >
          EXPLORE MY WORK
        </motion.button>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 cursor-pointer"
        onClick={onEnter}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </div>
  );
};