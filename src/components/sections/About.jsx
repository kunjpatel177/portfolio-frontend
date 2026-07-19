import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { areasOfInterest, profile, stats } from '../../data/portfolioData.js';
import { useCounter } from '../../hooks/useCounter.js';
import './About.css';

function StatCard({ item }) {
  const { ref, count } = useCounter(item.value);
  return (
    <div className="about-stat portfolio-card" ref={ref}>
      <strong>{count}+</strong>
      <span>{item.label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-shell alt">
      <div className="container">
        <SectionHeading eyebrow="About" title="Backend-minded full stack engineering" text={profile.objective} />
        <div className="about-grid">
          <motion.div className="about-panel portfolio-card" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>Professional Summary</h3>
            <p>{profile.summary}</p>
            <h3>Education</h3>
            <p><strong>{profile.education.institution}</strong><br />{profile.education.program}<br />CGPA: {profile.education.cgpa}</p>
          </motion.div>
          <motion.div className="about-panel portfolio-card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>Research Internship</h3>
            <p><strong>{profile.internship.organization}</strong> · {profile.internship.project}<br />Mentor: {profile.internship.mentor}</p>
            <div className="tag-list">
              {profile.internship.focus.map((item) => <span key={item}>{item}</span>)}
            </div>
            <h3>Areas of Interest</h3>
            <div className="tag-list">
              {areasOfInterest.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.div>
        </div>
        <div className="about-stats">
          {stats.map((item) => <StatCard key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default About;
