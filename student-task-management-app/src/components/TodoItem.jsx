function TodoItem({ task, toggleComplete }) {
  return (
    <li
      onClick={() => toggleComplete(task.id)}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
        padding: "8px",
        borderBottom: "1px solid #ccc"
      }}
    >
          <span style={{ fontSize: "20px" }}>
        {task.completed ? "✅" : "⭕"}
      </span>
      <span>{task.text}</span>
    </li>
  );
}

export default TodoItem;
