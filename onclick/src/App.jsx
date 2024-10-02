import { useState } from "react";
import "./App.css";
import data from "./lib/data.json";

export default function App() {
  let [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
  }

  function handleCounter1() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter((counter = 0));
  }

  function handleClick(message) {
    console.log(message);
  }

  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map((number) => number * 2);
  console.log(doubledNumbers);

  return (
    <div className="section1">
      <h1>Hello</h1>
      <button onClick={handleCounter}>Click for Counting</button>
      <button onClick={handleCounter1}>Click for minus Counting</button>
      <button onClick={reset}>Click to reset Counter</button>
      <p>{counter}</p>
      <button className="buttonHello" onClick={() => handleClick("Hello!")}>
        Click me and I say hello!
      </button>
      <button onClick={() => handleClick("Goodbye!")}>
        Click me and I say goodbye!
      </button>

      {data.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{post.email}</p>
          </div>
        );
      })}
    </div>
  );
}
