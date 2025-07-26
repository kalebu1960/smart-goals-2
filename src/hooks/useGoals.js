import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { getGoals, addGoal, updateGoal, deleteGoal } from '../api.js'; 

export default function useGoals() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGoals() {
      try {
        const data = await getGoals();
        setGoals(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchGoals();
  }, []);

  const handleAdd = async (goal) => {
    try {
      const newGoal = await addGoal(goal);
      setGoals(prev => [...prev, newGoal]);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  const handleUpdate = (id, updates) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, ...updates } : g));
  };

  const handleDelete = (id) => {
    setGoals(prev => prev.filter(g => g.id !== id));
  };

  return {
    goals,
    loading,
    error,
    handleAdd,
    handleUpdate,
    handleDelete
  };
}
