import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { skillCategories } from '../../data/portfolioData.js';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="A practical stack for secure product delivery" text="Grouped by the work they support: frontend clarity, backend reliability, databases, developer tooling, coursework and collaboration." />
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.article
              className="skill-card portfolio-card"
              key={category.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <h3>{category.title}</h3>
              {category.skills.map(({ name, level, icon: Icon }) => (
                <div className="skill-row" key={name}>
                  <div className="skill-top"><span><Icon /> {name}</span><strong>{level}%</strong></div>
                  <div className="skill-track"><motion.span initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} /></div>
                </div>
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
