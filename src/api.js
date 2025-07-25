import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getGoals = () => api.get('/goals').then(res => res.data);
export const addGoal = goal => api.post('/goals', goal).then(res => res.data);
export const updateGoal = (id, updates) => api.patch(`/goals/${id}`, updates).then(res => res.data);
export const deleteGoal = id => api.delete(`/goals/${id}`);
