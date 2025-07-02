"use client";
import { useState } from 'react';
import styles from "../app/page.module.css";


const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span
              className={task.completed ? styles.completed : ''}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className={styles.deleteBtn}>
              ✖
            </button>
          </li>
        ))}
      </ul>
      <p className={styles.count}>Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default Tasks;