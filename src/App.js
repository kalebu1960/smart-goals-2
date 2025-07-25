import React, { useState, useEffect } from 'react';
import { getGoals } from './api.js';
import GoalList from './components/GoalList.js';

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGoals().then(setGoals).finally(() => setLoading(false));
  }, []);

  const handleGoalUpdate = (id, newSaved) => {
    setGoals(prev =>
      prev.map(g => (g.id === id ? { ...g, savedAmount: newSaved } : g))
    );
  };

  // --- Add summary calculations here ---
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  const today = new Date();
  const upcoming = goals.filter(g => {
    const deadline = new Date(g.deadline);
    const daysLeft = (deadline - today) / (1000 * 60 * 60 * 24);
    return daysLeft >= 0 && daysLeft <= 30 && g.savedAmount < g.targetAmount;
  }).length;

  const overdue = goals.filter(g => {
    const deadline = new Date(g.deadline);
    return deadline < today && g.savedAmount < g.targetAmount;
  }).length;
  // --- End summary calculations ---

  if (loading) return <div>Loading goals…</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Smart Goal Planner</h1>
      {/* Add summary display */}
      <div style={{ marginBottom: '1.5rem', background: '#f8f8f8', padding: '1rem', borderRadius: '6px' }}>
        <strong>Total Goals:</strong> {totalGoals} &nbsp;|&nbsp;
        <strong>Total Saved:</strong> {totalSaved.toLocaleString()} &nbsp;|&nbsp;
        <strong>Completed:</strong> {completedGoals} &nbsp;|&nbsp;
        <strong>Upcoming (30d):</strong> {upcoming} &nbsp;|&nbsp;
        <strong>Overdue:</strong> {overdue}
      </div>
      <GoalList goals={goals} onUpdate={handleGoalUpdate} />
    </div>
  );
}

export default App;
