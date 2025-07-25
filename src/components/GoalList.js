// src/components/GoalList.js
import React from 'react';
import { useForm } from 'react-hook-form';
import useGoals from '../hooks/useGoals';
import GoalItem from './GoalItem.js';

export default function GoalList() {
  const { goals, loading, error, handleAdd, handleUpdate, handleDelete } = useGoals();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    handleAdd({
      ...data,
      targetAmount: Number(data.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    });
    reset();
  };

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* Overview stats omitted for brevity */}
      <section>
        <h3>Add New Goal</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name', { required: true })} placeholder="Name" />
          <input {...register('targetAmount', { required: true, valueAsNumber: true })} type="number" placeholder="Target" />
          <input {...register('category')} placeholder="Category" />
          <input {...register('deadline', { required: true })} type="date" />
          <button type="submit">Add Goal</button>
        </form>
      </section>

      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
