import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('portfolio-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (payload) => api.post('/auth/login', payload),
};

export const profileService = {
  get: () => api.get('/profile'),
  update: (payload) => api.put('/profile', payload),
};

export const projectService = {
  list: () => api.get('/projects'),
  create: (payload) => api.post('/projects', payload),
  update: (id, payload) => api.put(`/projects/${id}`, payload),
  remove: (id) => api.delete(`/projects/${id}`),
};

export const messageService = {
  create: (payload) => api.post('/messages', payload),
  list: (params) => api.get('/messages', { params }),
  remove: (id) => api.delete(`/messages/${id}`),
};

export const githubService = {
  profile: (username) => axios.get(`https://api.github.com/users/${username}`),
  repos: (username) => axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
};

export default api;
