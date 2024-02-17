import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./assets/compnents/about";
import logoImg from "./assets/images/logo.png";
import Home from "./assets/compnents/home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="md:flex justify-between">
        <div className="logo-wrapper">
          <img className="logo" src={logoImg} alt="" srcset="" />
        </div>
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about">Skills</Link>
          <Link to="/about">Arts</Link>
          <Link to="/about">Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
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
