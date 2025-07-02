"use client";
import { useState } from 'react';
import styles from "../app/page.module.css";


const Tasks = ({ tasks, setTasks }) => {

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };


  return (
    <div className={styles.tasksContainer}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>No tasks yet. Add one above!</p>
      ) : (
        <div>
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <li key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completedTask : ''}`}>
                <div className={styles.taskContent}>
                  <span
                    className={styles.taskText}
                    onClick={() => handleComplete(task.id)}
                  >
                    {task.text}
                  </span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.taskStats}>
            <span>Total: {tasks.length}</span>
            <span>Completed: {tasks.filter(t => t.completed).length}</span>
            <span>Remaining: {tasks.filter(t => !t.completed).length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;