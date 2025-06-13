// App.jsx
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/grgrgr"; // ✅ Correct casing

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // ✅ Add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // ✅ Toggle task complete/incomplete
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // ✅ Clear completed tasks
  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    setTasks(activeTasks);
  };

  // ✅ Filter tasks based on selected tab
  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : filter === "active"
      ? tasks.filter((task) => !task.completed)
      : [];

  return (
    <div
      style={{
        backgroundColor: "#111827", // dark background
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "500px", margin: "0 auto", color: "white" }}>
        {/* ✅ Title */}
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Student Task Manager
        </h1>

        {/* ✅ Input Field */}
        <TodoInput addTask={addTask} />

        {/* ✅ Task List */}
        <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} />

        {/* ✅ Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* All Tab */}
          <button
            onClick={() => setFilter("all")}
            style={{
              padding: "0.5rem 1.2rem",
              backgroundColor: "transparent",
              border: "1px solid #6b7280",
              borderRadius: "8px",
              color: "pink",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            All
          </button>

          {/* Completed Tab */}
          <button
            onClick={() => setFilter("completed")}
            style={{
              padding: "0.5rem 1.2rem",
              backgroundColor: "transparent",
              border: "1px solid #6b7280",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Completed
          </button>

          {/* Active Tab */}
          <button
            onClick={() => setFilter("active")}
            style={{
              padding: "0.5rem 1.2rem",
              backgroundColor: "transparent",
              border: "1px solid #6b7280",
              borderRadius: "8px",
              color: "#38bdf8", // light blue
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Active
          </button>

          {/* Clear Completed Tab */}
          <button
            onClick={clearCompleted}
            style={{
              padding: "0.5rem 1.2rem",
              backgroundColor: "transparent",
              border: "1px solid #ef4444",
              borderRadius: "8px",
              color: "#ef4444",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
