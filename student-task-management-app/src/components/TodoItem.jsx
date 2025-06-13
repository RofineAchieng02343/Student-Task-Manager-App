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
      {task.text}
    </li>
  );
}

export default TodoItem;
