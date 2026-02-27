import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Display() {
  const { count } = useContext(CounterContext);

  return <h2>Count Value: {count}</h2>;
}

export default Display;
