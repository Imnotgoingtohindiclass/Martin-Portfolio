import { Code2, Database, Cloud, Shield, Brain, Terminal } from 'lucide-react';

const skillCategories = [
    {
      name: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React/Next.js', level: 90, description: 'Building modern web applications with React and Next.js ecosystem' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development with advanced TypeScript features' },
        { name: 'CSS/Tailwind', level: 88, description: 'Creating responsive and beautiful UIs with modern CSS frameworks' }
      ]
    },
    {
      name: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 82, description: 'Server-side JavaScript with Express and NestJS' },
        { name: 'Python', level: 75, description: 'Backend development and scripting with Python' },
        { name: 'PostgreSQL', level: 80, description: 'Database design and optimization' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 70, description: 'Cloud infrastructure and serverless computing' },
        { name: 'Docker', level: 75, description: 'Containerization and deployment' },
        { name: 'CI/CD', level: 78, description: 'Automated testing and deployment pipelines' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      skills: [
        { name: 'Network Security', level: 65, description: 'Understanding of network protocols and security' },
        { name: 'Web Security', level: 72, description: 'OWASP top 10 and secure coding practices' },
        { name: 'Cryptography', level: 68, description: 'Basic cryptographic principles and implementations' }
      ]
    },
    {
      name: 'AI & ML',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', level: 60, description: 'Deep learning and neural networks' },
        { name: 'scikit-learn', level: 65, description: 'Machine learning algorithms and data analysis' },
        { name: 'NLP', level: 55, description: 'Natural language processing fundamentals' }
      ]
    },
    {
      name: 'Tools & Systems',
      icon: Terminal,
      skills: [
        { name: 'Git', level: 85, description: 'Version control and collaboration' },
        { name: 'Linux', level: 80, description: 'System administration and shell scripting' },
        { name: 'VS Code', level: 90, description: 'Advanced IDE usage and customization' }
      ]
    }
  ];
  
  export default skillCategories;
    