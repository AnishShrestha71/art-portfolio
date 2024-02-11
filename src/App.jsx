import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./assets/compnents/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Arts</li>
          <li>Contact</li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </header>

      <h1>deploy changes</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p></p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ height: "450px" }}></div>
      <div id="skills" style={{ height: "145px", backgroundColor: "red" }}>
        body section
      </div>
    </>
  );
}

export default App;
