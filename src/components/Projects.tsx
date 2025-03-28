import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import projects from './projectsList';


export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center neon-glow"
      >
        PROJECTS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-card p-6 rounded-lg hover:border-primary transition-colors duration-300"
          >
            <div
              className="h-48 rounded-lg mb-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={project.live}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};