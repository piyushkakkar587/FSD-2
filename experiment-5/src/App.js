import React, { Suspense, lazy, useState } from "react";
import Home from "./components/Home";
import "./App.css";

// Lazy loading
const About = lazy(() => import("./components/About"));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="container">
      <h1>Lazy Loading Performance Optimization</h1>

      <Home />

      <button
        className="load-btn"
        onClick={() => setShowAbout(true)}
      >
        Load About Component
      </button>

      {showAbout && (
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}

export default App;
