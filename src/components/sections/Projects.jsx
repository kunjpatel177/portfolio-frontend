import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading.jsx';
import ProjectModal from '../project/ProjectModal.jsx';
import { projects } from '../../data/portfolioData.js';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell alt">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Selected engineering projects" text="Resume projects shaped into detailed case-study cards with responsibilities, architecture notes and future improvements." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card portfolio-card" key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <div className="project-image">{project.image}</div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-actions">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>}
                  <button type="button" onClick={() => setActiveProject(project)}>View Details</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

export default Projects;
