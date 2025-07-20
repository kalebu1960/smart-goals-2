// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getGoals = () => api.get('/goals').then(res => res.data);
export const addGoal = goal => api.post('/goals', goal).then(res => res.data);
export const updateGoal = (id, updates) => api.patch(`/goals/${id}`, updates).then(res => res.data);
export const deleteGoal = id => api.delete(`/goals/${id}`);
