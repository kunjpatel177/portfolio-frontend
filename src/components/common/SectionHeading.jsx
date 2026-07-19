import { motion } from 'framer-motion';
import React from 'react';
import './SectionHeading.css';

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default SectionHeading;
