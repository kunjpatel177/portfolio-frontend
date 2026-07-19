import { FaTimes } from 'react-icons/fa';
import React from 'react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" role="presentation" onClick={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="project-modal-close" onClick={onClose} aria-label="Close project details"><FaTimes /></button>
        <div className="project-image">{project.image}</div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {['features', 'responsibilities', 'future'].map((key) => (
          <div className="modal-block" key={key}>
            <h3>{key === 'future' ? 'Future Improvements' : key[0].toUpperCase() + key.slice(1)}</h3>
            <ul>{project[key].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
        <div className="modal-block"><h3>Architecture</h3><p>{project.architecture}</p></div>
        <div className="modal-block"><h3>Tech Stack</h3><p>{project.technologies.join(', ')}</p></div>
        <div className="modal-block"><h3>Challenges</h3><p>{project.challenges}</p></div>
        <div className="modal-block"><h3>Screenshots</h3><p>Project screenshots can be uploaded from the protected admin dashboard.</p></div>
      </article>
    </div>
  );
}

export default ProjectModal;
