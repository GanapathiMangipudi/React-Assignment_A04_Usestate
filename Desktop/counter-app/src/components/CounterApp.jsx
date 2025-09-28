import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

const increment = () =>
    {
 setCount(c => c + 1);
      setShowWarning(false);
    }

const decrement = () => {
    if (count > 0) {
      setCount(c => (c > 0 ? c - 1 : 0));
      setShowWarning(false);
    } else {
      setShowWarning(true); 
    }
  };

  return (
    <div className="card p-3 shadow-sm">
      <h2>Counter App</h2>
      <h3 className="my-3">Count: {count}</h3>

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
      </div>

      {showWarning && (
        <div className="alert alert-danger mt-3">
          Counter cannot be negative!
        </div>
      )}
    </div>
  );
}
