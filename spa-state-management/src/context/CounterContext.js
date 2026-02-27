import React, { createContext, useState } from "react";

// Step 1: Create Context
export const CounterContext = createContext();

// Step 2: Create Provider Component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
