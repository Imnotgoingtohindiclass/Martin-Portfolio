import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const cursorX = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: cursorX,
        top: cursorY,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: isActive ? 1.5 : 1,
        opacity: isActive ? 0.8 : 0.75,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    />
  );
};
