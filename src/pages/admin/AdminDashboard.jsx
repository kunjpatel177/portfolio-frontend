import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import { FaSearch, FaSignOutAlt, FaTrash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext.jsx';
import { messageService, profileService, projectService } from '../../services/api.js';
import { useDebounce } from '../../hooks/useDebounce.js';
import './AdminDashboard.css';

const emptyProject = { title: '', description: '', image: '', technologies: '', github: '', demo: '' };

function AdminDashboard() {
  const { logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState({ name: '', title: '', summary: '' });
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search);
  const pageSize = 5;

  const load = async () => {
    try {
      const [projectsResponse, messagesResponse, profileResponse] = await Promise.all([
        projectService.list(),
        messageService.list(),
        profileService.get(),
      ]);
      setProjects(projectsResponse.data.projects || projectsResponse.data);
      setMessages(messagesResponse.data.messages || messagesResponse.data);
      setProfile(profileResponse.data);
    } catch (error) {
      toast.error('Unable to load dashboard data.');
    }
  };

  useEffect(() => { load(); }, []);

  const filteredProjects = useMemo(() => projects.filter((project) => (
    project.title?.toLowerCase().includes(debouncedSearch.toLowerCase())
    || project.description?.toLowerCase().includes(debouncedSearch.toLowerCase())
  )), [projects, debouncedSearch]);

  const paginatedProjects = filteredProjects.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.max(Math.ceil(filteredProjects.length / pageSize), 1);

  const saveProject = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        ...projectForm,
        technologies: projectForm.technologies.split(',').map((item) => item.trim()).filter(Boolean),
      };
      await projectService.create(payload);
      toast.success('Project saved.');
      setProjectForm(emptyProject);
      load();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to save project.');
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    await projectService.remove(id);
    toast.success('Project deleted.');
    load();
  };

  const deleteMessage = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    await messageService.remove(id);
    toast.success('Message deleted.');
    load();
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    await profileService.update(profile);
    toast.success('Profile updated.');
  };

  return (
    <main className="admin-dashboard">
      <header className="admin-header">
        <div><span>Admin</span><h1>Portfolio Dashboard</h1></div>
        <button type="button" className="btn-portfolio secondary" onClick={logout}><FaSignOutAlt /> Logout</button>
      </header>

      <section className="admin-stats">
        <article className="portfolio-card"><strong>{projects.length}</strong><span>Projects</span></article>
        <article className="portfolio-card"><strong>{messages.length}</strong><span>Messages</span></article>
        <article className="portfolio-card"><strong>JWT</strong><span>Protected</span></article>
      </section>

      <section className="admin-grid">
        <form className="admin-panel portfolio-card" onSubmit={saveProject}>
          <h2>Manage Projects</h2>
          {Object.keys(emptyProject).map((key) => (
            <input key={key} placeholder={key === 'technologies' ? 'technologies, comma separated' : key} value={projectForm[key]} onChange={(event) => setProjectForm({ ...projectForm, [key]: event.target.value })} required={['title', 'description'].includes(key)} />
          ))}
          <input type="file" aria-label="Upload project image" />
          <button className="btn-portfolio" type="submit">Add Project</button>
        </form>

        <form className="admin-panel portfolio-card" onSubmit={updateProfile}>
          <h2>Manage Profile</h2>
          {['name', 'title'].map((key) => (
            <input key={key} value={profile[key] || ''} onChange={(event) => setProfile({ ...profile, [key]: event.target.value })} placeholder={key} />
          ))}
          <textarea rows="7" value={profile.summary || ''} onChange={(event) => setProfile({ ...profile, summary: event.target.value })} placeholder="summary" />
          <button className="btn-portfolio" type="submit">Update Profile</button>
        </form>
      </section>

      <section className="admin-panel portfolio-card">
        <div className="admin-list-top">
          <h2>Projects</h2>
          <label><FaSearch /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" /></label>
        </div>
        <div className="admin-table">
          {paginatedProjects.map((project) => (
            <div className="admin-row" key={project._id || project.id}>
              <div><strong>{project.title}</strong><span>{project.description}</span></div>
              <button type="button" onClick={() => deleteProject(project._id || project.id)}><FaTrash /></button>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button type="button" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Previous</button>
          <span>{page} / {totalPages}</span>
          <button type="button" disabled={page === totalPages} onClick={() => setPage((value) => value + 1)}>Next</button>
        </div>
      </section>

      <section className="admin-panel portfolio-card">
        <h2>Contact Messages</h2>
        <div className="admin-table">
          {messages.map((message) => (
            <div className="admin-row" key={message._id || message.id}>
              <div><strong>{message.subject}</strong><span>{message.name} · {message.email}<br />{message.message}</span></div>
              <button type="button" onClick={() => deleteMessage(message._id || message.id)}><FaTrash /></button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;
