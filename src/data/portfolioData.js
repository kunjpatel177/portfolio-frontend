import {
  FaAws,
  FaBootstrap,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiExpress, SiJavascript, SiLeetcode, SiMongodb, SiPostman } from 'react-icons/si';

export const profile = {
  name: 'Kunj Patel',
  title: 'Full Stack Developer | Backend Engineer',
  email: '',
  github: '',
  linkedin: '',
  leetcode: '',
  resumeUrl: '/resume.pdf',
  summary:
    'Full Stack Developer focused on scalable backend systems, secure web applications and dependable full stack delivery across React, Node.js, Express.js and MongoDB.',
  objective:
    'To contribute to software engineering teams by building secure, maintainable and performance-conscious applications while growing deeper expertise in backend architecture and cloud-ready systems.',
  education: {
    institution: 'Pandit Deendayal Energy University (PDEU)',
    program: 'Computer Science and Engineering',
    cgpa: 'Included in resume details provided by owner',
  },
  internship: {
    title: 'Research Internship',
    organization: 'PDEU',
    mentor: 'Dr. Nishant Doshi',
    project: 'GUJCOST Project',
    focus: ['Privacy-Preserving Data Sharing', 'Organizational Data Security', 'Access Control'],
  },
};

export const stats = [
  { label: 'Projects', value: 4 },
  { label: 'Skill Areas', value: 7 },
  { label: 'Research Focus Areas', value: 3 },
];

export const typingSkills = ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Docker'];

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90, icon: SiJavascript },
      { name: 'Java', level: 82, icon: FaJava },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 92, icon: FaReact },
      { name: 'Bootstrap 5', level: 88, icon: FaBootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, icon: FaNodeJs },
      { name: 'Express.js', level: 90, icon: SiExpress },
      { name: 'JWT & bcrypt', level: 86, icon: FaDatabase },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 88, icon: SiMongodb },
      { name: 'Mongoose', level: 84, icon: FaDatabase },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', level: 86, icon: FaGitAlt },
      { name: 'GitHub', level: 88, icon: FaGithub },
      { name: 'Postman', level: 82, icon: SiPostman },
      { name: 'Docker', level: 76, icon: FaDocker },
      { name: 'AWS', level: 74, icon: FaAws },
    ],
  },
  {
    title: 'Coursework',
    skills: [
      { name: 'Data Structures', level: 86, icon: FaDatabase },
      { name: 'Database Management Systems', level: 84, icon: FaDatabase },
      { name: 'Operating Systems', level: 80, icon: FaDatabase },
      { name: 'Computer Networks', level: 80, icon: FaDatabase },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 90, icon: FaDatabase },
      { name: 'Team Collaboration', level: 88, icon: FaDatabase },
      { name: 'Research Communication', level: 84, icon: FaDatabase },
    ],
  },
];

export const projects = [
  {
    id: 'repocore',
    title: 'RepoCore',
    description: 'A developer-focused repository management project designed around organized code workflows and maintainable collaboration.',
    image: 'RepoCore',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '',
    demo: '',
    features: ['Repository-centric project organization', 'Secure API architecture', 'Searchable project records', 'Responsive dashboard interface'],
    architecture: 'MERN application with React views, Express controllers, Mongoose models and protected admin routes.',
    challenges: 'Designing a clean project structure that remains easy to extend as repository metadata grows.',
    responsibilities: ['Frontend interface', 'REST API design', 'Database modeling', 'Authentication-ready admin flows'],
    future: ['GitHub OAuth integration', 'Repository analytics', 'Role-based access control'],
  },
  {
    id: 'lockforge',
    title: 'LockForge',
    description: 'A security-oriented application concept focused on controlled access, credential handling and privacy-aware workflows.',
    image: 'LockForge',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: '',
    demo: '',
    features: ['Secure authentication flow', 'Hashed credential storage', 'Token-protected routes', 'Validation-first API design'],
    architecture: 'Express service layer with JWT middleware, Mongoose persistence and security-focused request validation.',
    challenges: 'Balancing usability with secure defaults across authentication and protected resource access.',
    responsibilities: ['Backend engineering', 'Security middleware', 'Validation rules', 'API error handling'],
    future: ['Audit logs', 'Multi-factor authentication', 'Admin security reports'],
  },
  {
    id: 'book-store',
    title: 'Book Store',
    description: 'A full stack bookstore application for browsing, managing and organizing book records through a responsive web interface.',
    image: 'Book Store',
    technologies: ['React', 'Bootstrap', 'Express.js', 'MongoDB'],
    github: '',
    demo: '',
    features: ['Book catalog', 'CRUD operations', 'Responsive layouts', 'Reusable UI components'],
    architecture: 'React client consuming RESTful Express endpoints backed by MongoDB collections.',
    challenges: 'Keeping catalog interactions fast and simple while maintaining clean data validation.',
    responsibilities: ['UI components', 'API routes', 'Database schema', 'Loading and error states'],
    future: ['User reviews', 'Payment integration', 'Recommendation filters'],
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    description: 'A management system for organizing hospital workflows, records and operational data through structured modules.',
    image: 'Hospital Management System',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '',
    demo: '',
    features: ['Patient and operational records', 'Admin management views', 'Search-ready modules', 'Secure REST endpoints'],
    architecture: 'Modular MERN stack application separated into reusable client components and server-side controllers.',
    challenges: 'Structuring health-management data in a way that is clear, scalable and reliable.',
    responsibilities: ['Module planning', 'Frontend flows', 'Backend endpoints', 'Data modeling'],
    future: ['Appointment scheduling', 'Role permissions', 'Analytics dashboard'],
  },
];

export const experience = [
  {
    role: 'Research Intern',
    organization: 'PDEU',
    mentor: 'Dr. Nishant Doshi',
    project: 'GUJCOST Project',
    bullets: [
      'Worked on privacy-preserving data sharing for organizational environments.',
      'Studied organizational data security and access-control concerns.',
      'Explored secure approaches for controlled data access and responsible information exchange.',
    ],
  },
];

export const certificates = [
  'Odoo Hackathon Final Round',
  'PDEU Research Internship',
  'Apna College Full Stack Development',
];

export const areasOfInterest = ['Backend Engineering', 'Secure Web Applications', 'Full Stack Development', 'Cloud-ready Systems'];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '', icon: FaDatabase },
  { label: 'LeetCode', href: profile.leetcode, icon: SiLeetcode },
].filter((item) => item.href);
