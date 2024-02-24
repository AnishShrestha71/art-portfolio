import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallery({ list }) {
  const [filterVal, setfilterVal] = useState("all");
  const filterChanged = (e) => {
    let val = e.target.value;
    setfilterVal(val);
    console.log(val);
  };
  let filteredList = [];

  if (filterVal == "all") {
    filteredList = list;
  } else {
    filteredList = list.filter((image) => image.category === filterVal);
  }
  return (
    <>
      <div className="gallery-wrapper">
        <div className="menu-title">
          <h1>Gallery</h1>
        </div>
        Category:
        <select
          onChange={filterChanged}
          className="w-1/4 inline-block border border-gray-300 ml-2 mb-4 rounded p-2 bg-white"
        >
          <option value="all">All</option>
          <option value="portrait">Portrait</option>
          <option value="canvas">Canvas</option>
        </select>
        <div className="arts-wrapper">
          <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6"
          >
            {filteredList.map((item, index) => (
              <a href={`bivhuti-arts/${item.src}`}>
                <div className="cards" key={index}>
                  <img
                    src={`bivhuti-arts/${item.src}`}
                  />
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
}

export default Gallery;
