import { useState } from 'react';
import { updateGoal, deleteGoal } from '../api.js';

export default function useGoalController(goal, onUpdate, onDelete) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    deadline: goal.deadline,
  });
  const [deposit, setDeposit] = useState('');

  const percent = Math.min(100, Math.round((goal.savedAmount / goal.targetAmount) * 100));

  const update = async (updates) => {
    await updateGoal(goal.id, updates);
    onUpdate(goal.id, updates);
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    const amt = parseFloat(deposit);
    if (!(amt > 0)) return;
    await update({ savedAmount: goal.savedAmount + amt });
    setDeposit('');
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    const { name, targetAmount, deadline } = form;
    await update({ name, targetAmount: Number(targetAmount), deadline });
    setEditing(false);
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${goal.name}"?`)) return;
    await deleteGoal(goal.id);
    onDelete(goal.id);
  };

  return {
    editing,
    form,
    deposit,
    percent,
    setEditing,
    setForm,
    setDeposit,
    handleDeposit,
    handleEditSave,
    handleDelete,
  };
}
