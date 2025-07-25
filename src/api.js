const axios = require('axios');

const api = axios.create({
  baseURL: 'https://your-backend.onrender.com/api'
});

export const getGoals = () => api.get('/goals').then(res => res.data);
export const addGoal = goal => api.post('/goals', goal).then(res => res.data);
export const updateGoal = (id, updates) => api.patch(`/goals/${id}`, updates).then(res => res.data);
export const deleteGoal = id => api.delete(`/goals/${id}`);
