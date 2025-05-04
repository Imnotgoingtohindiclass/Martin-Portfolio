import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center neon-glow"
      >
        ABOUT ME
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 rounded-lg"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            I'm a Computing student passionate about creating innovative solutions through code. My journey in technology started with a fascination for how computers work, and it has evolved into a deep love for software development and artificial intelligence.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Currently pursuing my degree in Computer Science, I focus on full-stack development, machine learning, and cybersecurity. I believe in writing clean, efficient code and creating intuitive user experiences.
          </p>
          <p className="text-lg text-gray-300">
            When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or exploring the latest developments in technology.
          </p>
        </div>
      </motion.div>
    </div>
  );
};