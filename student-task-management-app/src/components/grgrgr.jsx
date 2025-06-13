// src/components/TodoList.jsx
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleComplete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
