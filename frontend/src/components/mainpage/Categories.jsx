import React from "react";

import img1 from "./images/dog.png";
import img2 from "./images/cat.png";
import img3 from "./images/bird.png";
import img4 from "./images/acc.png";

export default function Categories() {
  return (
    <>
      <div className="category">
        <div className="box f_flex">
          
            <img src={img1} alt="" />
            <span>Dog Food</span>
       </div>
       <div className="box f_flex">
            <img src={img2} alt="" />
            <span>Cat Food</span>
        </div>
        <div className="box f_flex">
            <img src={img3} alt="" />
            <span>Bird Food</span>
        </div>
        <div className="box f_flex">
            <img src={img4} alt="" />
            <span>Accessories</span>
        </div>
      </div>
    </>
  );
}
