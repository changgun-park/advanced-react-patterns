import React from "react";
import { useCounterContext } from "../useCounterContext";

function Decrement() {
  const { handleDecrement } = useCounterContext();

  return <button onClick={handleDecrement}>-</button>;
}

export { Decrement };
