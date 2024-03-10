import React from "react";
import homeImg from "/images/home-image.png";
import aboutImg from "/images/about.png";
import { Link } from "react-router-dom";
import homeArt1 from "/bivhuti-arts/canvas9.jpg";
import homeArt2 from "/bivhuti-arts/boy5-portrait.jpg";
import homeArt3 from "/bivhuti-arts/canvas5.jpg";
import homeArt4 from "/bivhuti-arts/couple-portrait.jpg";
import homeArt5 from "/bivhuti-arts/boy3-portrait.jpg";
import homeArt6 from "/bivhuti-arts/canvas10.jpg";
import homeArt7 from "/bivhuti-arts/baby.jpg";
import homeArt8 from "/bivhuti-arts/canvas3.jpg";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Canvas from "./canvas";
function Home() {
  return (
    <>
      <Canvas />
      <div className="home-wrapper">
        <div className="home">
          <div>
            <div>
              <h1>
                Hi <br /> I am Bivhuti Pahari
              </h1>
              <h2>Welcome to my art world</h2>
            </div>
          </div>
          <div className="justify-end self-img">
            <img
              className="relative"
              // style={{ right: "-25px" }}
              src={homeImg}
              alt=""
            />
          </div>
        </div>
        <div id="about" className="about">
          <div>
            <img src={aboutImg} alt="" srcset="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              pariatur et nemo doloribus veniam. Vero tenetur similique
              exercitationem laborum culpa nihil quae autem nostrum, modi enim
              facilis eveniet omnis illum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem expedita aspernatur
              itaque saepe, ut natus sunt accusamus illum velit, soluta earum
              quisquam sapiente animi exercitationem odio harum dolorem incidunt
              sed provident. Similique, soluta iste ea corporis ab voluptatibus
              laboriosam dolore tempora neque perferendis ipsum quaerat placeat,
              temporibus doloribus autem? Commodi.
            </p>
          </div>
        </div>
        <section id="arts">
          <h1 className="title">Arts</h1>
          <div className="arts-wrapper">
            <LightGallery
              // onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6"
            >
              <a href={homeArt1}>
                <div className="cards">
                  <img src={homeArt1} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt2}>
                <div className="cards">
                  <img src={homeArt2} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt3}>
                <div className="cards">
                  <img src={homeArt3} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt4}>
                <div className="cards">
                  <img src={homeArt4} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt5}>
                <div className="cards">
                  <img src={homeArt5} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt6}>
                <div className="cards">
                  <img src={homeArt6} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt7}>
                <div className="cards">
                  <img src={homeArt7} alt="" srcset="" />
                </div>
              </a>
              <a href={homeArt8}>
                <div className="cards">
                  <img src={homeArt8} alt="" srcset="" />
                </div>
              </a>
            </LightGallery>
          </div>
        </section>
        <div className="flex justify-center">
          <div className="links">
            <Link to="/gallery">Visit My Gallery</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
