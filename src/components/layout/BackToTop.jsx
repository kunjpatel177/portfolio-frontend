import { useEffect, useState } from 'react';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a className={`back-to-top ${visible ? 'visible' : ''}`} href="#home" aria-label="Back to top">
      <FaArrowUp />
    </a>
  );
}

export default BackToTop;
