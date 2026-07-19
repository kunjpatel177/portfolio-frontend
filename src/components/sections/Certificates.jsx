import { motion } from 'framer-motion';
import React from 'react';
import { FaAward } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading.jsx';
import { certificates } from '../../data/portfolioData.js';
import './Certificates.css';

function Certificates() {
  return (
    <section id="certificates" className="section-shell alt">
      <div className="container">
        <SectionHeading eyebrow="Certificates" title="Recognitions and learning milestones" text="Certificates and participation milestones from hackathon, internship and full stack development learning." />
        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.article className="certificate-card portfolio-card" key={certificate} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <FaAward />
              <h3>{certificate}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
