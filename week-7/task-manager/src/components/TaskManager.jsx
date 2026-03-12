import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  // Toggle Complete
  function toggleTask(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  }

  // Delete Task
  function deleteTask(id) {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  }

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <AddTaskForm addTask={addTask} />

      <h3>
        Total: {tasks.length} | Completed: {completedCount}
      </h3>

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;