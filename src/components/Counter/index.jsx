import { useState } from "react";
import "./counter.css";

const index = ({ min, max }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter:
          <span>{count}</span>
        </p>
        <p>
          <button
            type="button"
            onClick={() => {
              if (count > min) setCount((count) => count - 1);
            }}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              if (count < max) setCount((count) => count + 1);
            }}
          >
            +
          </button>
        </p>
        <div>
          <a href="/" className="App-link">
            Home
          </a>
        </div>
      </header>
    </div>
  );
};

export default index;
