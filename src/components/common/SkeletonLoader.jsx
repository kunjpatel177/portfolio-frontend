import './SkeletonLoader.css';
import React from 'react';

function SkeletonLoader({ rows = 3 }) {
  return (
    <div className="skeleton-list">
      {Array.from({ length: rows }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <span />
          <strong />
          <em />
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
