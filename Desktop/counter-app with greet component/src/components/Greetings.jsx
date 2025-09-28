import React from "react";

export default function Greeting({ name }) {
  return (
    <div className="alert alert-primary" role="alert">
      Hello, {name ? name : "Guest"}!
    </div>
  );
}
