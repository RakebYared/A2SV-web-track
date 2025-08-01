import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://akil-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  signup: (userData) => api.post('/signup', userData),
  login: (credentials) => api.post('/login', credentials),
  verifyEmail: (emailData) => api.post('/verify-email', emailData),
};

// Token management utilities
export const tokenUtils = {
  getToken: () => localStorage.getItem('accessToken'),
  setToken: (token) => localStorage.setItem('accessToken', token),
  removeToken: () => localStorage.removeItem('accessToken'),
  isAuthenticated: () => !!localStorage.getItem('accessToken'),
};

// User management utilities
export const userUtils = {
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  setUser: (user) => localStorage.setItem('user', JSON.stringify(user)),
  removeUser: () => localStorage.removeItem('user'),
};

export default api; 