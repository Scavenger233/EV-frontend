// src/lib/api.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: add Authorization token if present
api.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem('ecomvisionUser');
    if (userData) {
      try {
        const { token } = JSON.parse(userData);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.warn('[api] Invalid token format in localStorage');
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401/403 and redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('ecomvisionUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;