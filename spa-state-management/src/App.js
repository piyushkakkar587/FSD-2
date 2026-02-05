import React from "react";
import "./App.css";
import Display from "./components/Display";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container">
      <h1>Context API Counter</h1>
      <Display />
      <Counter />
    </div>
  );
}

export default App;
