import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <div className="portfolio-card not-found-card">
        <span>404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link className="btn-portfolio" to="/">Back Home</Link>
      </div>
    </main>
  );
}

export default NotFound;
