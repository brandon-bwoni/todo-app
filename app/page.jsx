
"use client";
import styles from './page.module.css';
import Tasks from "@/components/Tasks";
import { useState } from 'react';


const HomePage = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
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
            value={newTask}
            placeholder="Add a new task..."
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleTask}>
          Add Task
        </button>
      </div>
      <Tasks Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default HomePage;