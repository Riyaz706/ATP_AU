import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!title) {
      setError("Title is required");
      return;
    }

    if (title.length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    addTask(newTask);

    // Clear form
    setTitle("");
    setPriority("Low");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;