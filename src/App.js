import "./App.css";
import Counter from "./components/Counter";
import CounterWithHooks from "./components/CounterWithHooks";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todos />
      <CounterWithHooks />
    </div>
  );
}

export default App;
