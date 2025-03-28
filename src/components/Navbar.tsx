import React from 'react';
import { Code2, Cpu, Home, User } from 'lucide-react';
import useSound from 'use-sound';
import { Section } from '../App';

interface NavbarProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems = [
  { icon: Home, label: 'home' as Section },
  { icon: User, label: 'about' as Section },
  { icon: Code2, label: 'projects' as Section },
  { icon: Cpu, label: 'skills' as Section },
];

export const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [playHover] = useSound('/hover.mp3', { volume: 0.25 });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => onNavigate(label)}
              onMouseEnter={() => playHover()}
              className={`px-4 py-2 transition-colors duration-200 ${
                currentSection === label
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};