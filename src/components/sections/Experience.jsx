import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { experience } from '../../data/portfolioData.js';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Research internship timeline" text="PDEU research work centered on privacy, organizational security and controlled data access." />
        <div className="timeline">
          {experience.map((item) => (
            <motion.article className="timeline-item portfolio-card" key={item.role} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="timeline-dot" />
              <h3>{item.role}</h3>
              <p className="timeline-meta">{item.organization} · {item.project} · Mentor: {item.mentor}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
