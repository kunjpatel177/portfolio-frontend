import { useEffect, useState } from 'react';
import React from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(max-width: 991px)').matches) return undefined;
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className="custom-cursor" style={{ transform: `translate(${point.x}px, ${point.y}px)` }} />;
}

export default CustomCursor;
