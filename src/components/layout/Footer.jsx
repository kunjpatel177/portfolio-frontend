import { FaArrowUp } from 'react-icons/fa';
import React from 'react';
import { profile, socials } from '../../data/portfolioData.js';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="footer-logo" href="#home">KP</a>
          <p>Building secure, scalable and polished web applications.</p>
        </div>
        <div className="footer-socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer" title={label}>
              <Icon />
            </a>
          ))}
          <a href="#home" title="Back to top"><FaArrowUp /></a>
        </div>
      </div>
      <div className="container footer-copy">Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
