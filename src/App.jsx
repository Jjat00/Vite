import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter:
          <span>{count}</span>
        </p>
        <p>
          <button type="button" onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
