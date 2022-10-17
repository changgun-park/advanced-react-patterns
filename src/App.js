import "./App.css";
import { Counter } from "./compound-component/Counter";

function App() {
  return (
    <div className="App">
      <Counter>
        <Counter.Count max={10} />
        <Counter.Increment />
        <Counter.Decrement />
      </Counter>
    </div>
  );
}

export default App;
