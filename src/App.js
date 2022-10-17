import "./App.css";
import { Counter } from "./compound-component/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onChangeHandler = (newCount) => {
    setCount(newCount);
    console.log(newCount);
  };

  return (
    <div className="App">
      <Counter onChange={onChangeHandler} value={count}>
        <Counter.Count max={10} />
        <Counter.Increment />
        <Counter.Decrement />
      </Counter>
    </div>
  );
}

export default App;
