import React from "react";

const Counter = ({ count, onIncrement, onDecrement, onReset }) => (
  <div className="flex flex-col items-center space-y-4 border p-4 rounded-lg shadow">
    <h1 className="text-xl font-semibold">Counter: {count}</h1>
    <div className="space-x-2">
      <button
        onClick={onIncrement}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={onDecrement}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Decrement
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  </div>
);

export default Counter;
