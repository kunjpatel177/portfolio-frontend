import { motion } from 'framer-motion';
import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import ScrollProgress from '../components/layout/ScrollProgress.jsx';
import BackToTop from '../components/layout/BackToTop.jsx';
import CustomCursor from '../components/layout/CustomCursor.jsx';
import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Skills from '../components/sections/Skills.jsx';
import Projects from '../components/sections/Projects.jsx';
import Experience from '../components/sections/Experience.jsx';
import Certificates from '../components/sections/Certificates.jsx';
import GitHubSection from '../components/sections/GitHubSection.jsx';
import Contact from '../components/sections/Contact.jsx';
import './Home.css';

function Home() {
  return (
    <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CustomCursor />
    </motion.div>
  );
}

export default Home;
