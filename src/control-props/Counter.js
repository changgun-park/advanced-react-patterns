import { useEffect, useState, useRef } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Decrement, Increment } from "./components";
import styled from "styled-components";

function Counter({ children, onChange, value = null, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const isControlled = value !== null && !!onChange; // value, onChange 모두 있어야 controlled..

  const getCount = () => (isControlled ? value : count);

  const firstMount = useRef(true);

  useEffect(() => {
    console.log("useEffect");

    // controlled가 아닐때만 onChange 발동
    if (!firstMount.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMount.current = false;
    console.log("log effect");
  }, [count, onChange, isControlled]);

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount() - 1));
  };

  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  return (
    <CounterProvider
      value={{ count: getCount(), handleIncrement, handleDecrement }}
    >
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
