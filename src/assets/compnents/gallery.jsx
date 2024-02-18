import React, { useState } from "react";
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
          className="w-1/4 inline-block border border-gray-300 ml-2 mb-4 rounded p-2"
        >
          <option value="all">All</option>
          <option value="portrait">Portrait</option>
          <option value="canvas">Canvas</option>
        </select>
        <div className="arts-wrapper grid grid-cols-4 grid-flow-row gap-6">
          {filteredList.map((item, index) => (
            <div className="cards" key={index}>
              <img
                src={`src/assets/images/${item.src}`}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
