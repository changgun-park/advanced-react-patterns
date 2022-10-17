import { useEffect, useState, useRef } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Decrement, Increment } from "./components";
import styled from "styled-components";

function Counter({ children, onChange, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const firstMount = useRef(true);

  useEffect(() => {
    if (!firstMount.current) {
      onChange && onChange(count);
    }
    firstMount.current = false;
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <StyledCounter>{children}</StyledCounter>
    </CounterProvider>
  );
}

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Decrement = Decrement;
Counter.Increment = Increment;

export { Counter };
