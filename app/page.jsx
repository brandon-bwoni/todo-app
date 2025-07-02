
"use client";
import styles from './page.module.css';
import Tasks from "@/components/Tasks";
import { useState } from 'react';


const HomePage = () => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Brandon&apos;s to the Todo App</h1>
        <p className={styles.description}>This is a list of my daily tasks </p>

        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Add a new task..."
          />
        </div>
        <button className={styles.addButton}>
          Add Task
        </button>
      </div>
      <div>
        <Tasks />
      </div>

    </>
  );
};

export default HomePage;