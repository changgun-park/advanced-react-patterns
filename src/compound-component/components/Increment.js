import React from "react";
import { useCounterContext } from "../useCounterContext";

function Increment() {
  const { handleIncrement } = useCounterContext();

  return <button onClick={handleIncrement}>+</button>;
}

export { Increment };
