import React from 'react';
import ProgressBar from './ProgressBar.js';
import styles from './GoalItem.module.css';
import useGoalController from '../hooks/useGoalController';

export default function GoalItem({ goal, onUpdate, onDelete }) {
  const ctrl = useGoalController(goal, onUpdate, onDelete);

  return (
    <div className={styles.container}>
      {ctrl.editing ? (
        <form onSubmit={ctrl.handleEditSave}>
          <input name="name" value={ctrl.form.name} onChange={e => ctrl.setForm(prev => ({ ...prev, name: e.target.value }))} />
          <input
            name="targetAmount"
            type="number"
            min="0"
            step="0.01"
            value={ctrl.form.targetAmount}
            onChange={e => ctrl.setForm(prev => ({ ...prev, targetAmount: e.target.value }))}
          />
          <input name="deadline" type="date" value={ctrl.form.deadline} onChange={e => ctrl.setForm(prev => ({ ...prev, deadline: e.target.value }))} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => ctrl.setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <ProgressBar completed={ctrl.percent} />
          <p>{goal.savedAmount.toLocaleString()} / {goal.targetAmount.toLocaleString()} ({ctrl.percent}%)</p>
          <form onSubmit={ctrl.handleDeposit} className={styles.depositForm}>
            <input
              type="number"
              min="0"
              step="0.01"
              required
              placeholder="Amount"
              value={ctrl.deposit}
              onChange={e => ctrl.setDeposit(e.target.value)}
            />
            <button type="submit">Deposit</button>
          </form>
          <div className={styles.buttons}>
            <button onClick={() => ctrl.setEditing(true)}>Edit</button>
            <button onClick={ctrl.handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
