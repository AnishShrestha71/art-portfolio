import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./assets/compnents/about";
import logoImg from "/images/logo.png";
import Home from "./assets/compnents/home";
import Gallery from "./assets/compnents/gallery";

function App() {
  // const [count, setCount] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenuLink, setShowMenuLink] = useState(false);
  const galleryList = [
    { category: "portrait", src: "about.jpg" },
    { category: "canvas", src: "about.jpg" },
    { category: "portrait", src: "about.jpg" },
  ];

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = ()=>{
    setToggleMenu(false);
  }
  const isMobDevice = window.innerWidth < 767;

  return (
    <>
      <header className="flex justify-between">
        <div className="logo-wrapper">
          <img className="logo" src={logoImg} alt="" srcset="" />
        </div>
        <div
          className={
            "menu-links " +
            (isMobDevice && toggleMenu ? "show-link" : "hide-link")
          }
        >
          <Link to="/" onClick={isMobDevice ? handleLinkClick : null}>
            Home
          </Link>
          <Link to="/about" onClick={isMobDevice ? handleLinkClick : null}>
            About
          </Link>
          <Link to="/gallery" onClick={isMobDevice ? handleLinkClick : null}>
            Gallery
          </Link>
          <Link to="/about" onClick={isMobDevice ? handleLinkClick : null}>
            Arts
          </Link>
          <Link to="/about" onClick={isMobDevice ? handleLinkClick : null}>
            Contact
          </Link>
        </div>
        <div
          class={"burger" + (toggleMenu ? " toggle" : "")}
          onClick={showMenu}
        >
          <div class="line1 burger-div"></div>
          <div class="line2 burger-div"></div>
          <div class="line3 burger-div"></div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery list={galleryList} />} />
      </Routes>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,122.7C672,117,768,139,864,170.7C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="wrapper">
          <div>
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:bivhutipahari@gmail.com">
                bivhutipahari@gmail.com
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/_bvhuti_/" target="_blank">
                _bvhuti_
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
