import React from "react";

//dumb component
const Todo = ({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) => {
  const [newTodo, setNewTodo] = React.useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 border p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-4 py-2 border rounded w-64"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2 w-full">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 rounded ${
              todo.completed ? "bg-green-100 line-through" : "bg-white"
            }`}
          >
            <span
              onClick={() => onToggleTodo(todo.id)}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
