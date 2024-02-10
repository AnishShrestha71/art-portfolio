import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./assets/compnents/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>deploy changes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p></p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
