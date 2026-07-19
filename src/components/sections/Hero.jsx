import { motion } from 'framer-motion';
import React from 'react';
import { FaDownload, FaEnvelope, FaFolderOpen } from 'react-icons/fa';
import { profile, typingSkills } from '../../data/portfolioData.js';
import { useTypingText } from '../../hooks/useTypingText.js';
import './Hero.css';

function Hero() {
  const typed = useTypingText(typingSkills);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="hero-kicker">Full Stack Portfolio</span>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{profile.summary}</p>
          <div className="hero-typing">Working with <strong>{typed}</strong><span className="typing-caret" /></div>
          <div className="hero-actions">
            <a className="btn-portfolio" href="#projects"><FaFolderOpen /> View Projects</a>
            <a className="btn-portfolio secondary" href={profile.resumeUrl} download><FaDownload /> Download Resume</a>
            <a className="btn-portfolio secondary" href="#contact"><FaEnvelope /> Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          className="terminal-card"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="terminal-top"><span className='tts-1' /><span className='tts-2' /><span className='tts-3' /></div>
          <pre>{`const developer = {
  name: 'Kunj Patel',
  stack: ['React', 'Node', 'MongoDB'],
  focus: 'secure scalable systems',
  availableFor: 'software engineering roles'
};

build(developer).ship();`}</pre>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
