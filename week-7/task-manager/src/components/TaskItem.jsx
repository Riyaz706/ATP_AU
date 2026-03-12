function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px 0",
        padding: "10px",
      }}
    >
      <h4
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </h4>

      <p>Priority: {task.priority}</p>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;