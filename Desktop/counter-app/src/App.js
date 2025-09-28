import React from "react";
import Greeting from "./components/Greetings";
import CounterApp from "./components/CounterApp";

export default function App() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Counter App with Greeting Component</h1>


      <Greeting name="Alice" />
      <Greeting />

      <div className="mt-4">
        <CounterApp />
      </div>
    </div>
  );
}
