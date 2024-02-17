import React from "react";
import homeImg from "../images/home-image.png";
import aboutImg from "../images/about.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
          <div className="justify-end ">
            <img
              className="relative"
              style={{ right: "-25px" }}
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
          <div className="arts-wrapper grid grid-cols-4 grid-flow-row gap-6">
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
            <div className="cards">
              <img src={aboutImg} alt="" srcset="" />
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <div className="links">
            <Link to="/about">Visit My Gallery</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
