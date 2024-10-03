import { StrictMode, useState } from "react";
import "./App.css";
import Flip from "./components/flip.jsx";
import DApp from "./components/useEffect.jsx";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([
    { id: 0, title: "Turnip" },
    { id: 1, title: "Artichoke" },
  ]);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello World</p>}
      {/* {isVisible ? <p>Hello World</p> : null} */}
      <div>
        <h1>Items</h1>
        <ul>
          {items.length
            ? items.map((item) => <li key={item.id}>{item.title}</li>)
            : null}
        </ul>
      </div>
      <StrictMode>
        <Flip />
        <DApp />
      </StrictMode>
    </>
  );
}
