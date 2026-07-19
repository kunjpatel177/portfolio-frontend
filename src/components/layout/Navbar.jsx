import { useEffect, useState } from 'react';
import React from 'react';
import { FaBars, FaDownload, FaGithub, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { profile } from '../../data/portfolioData.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import './Navbar.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact'];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links.map((item) => item.toLowerCase()).findLast((id) => {
        const element = document.getElementById(id);
        return element && element.offsetTop - 140 <= window.scrollY;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container navbar-inner">
        <a className="navbar-logo" href="#home" onClick={() => setOpen(false)}>KP</a>
        <button className="navbar-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            );
          })}
          <a className="nav-icon-link" href={profile.resumeUrl} download title="Download resume"><FaDownload /></a>
          {profile.github && <a className="nav-icon-link" href={profile.github} target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>}
          <button className="theme-toggle" type="button" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
