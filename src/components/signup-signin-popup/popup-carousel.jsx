import React from "react";
import PopupImageData from "./popup-image-data.js";
import PopupImageCarouselComp from "./popup-image-carousel-comp.jsx";
import "./popup-carousel.scss";
import HomeIcon from '@mui/icons-material/Home';

export default function PopUpCarousel(props) {
  return (
    <div
      className="popup-carousel-main"
      style={{
        visibility: props.isVisible ? "hidden" : "visible"
      }}
    >
    <div id="logo">
      <HomeIcon id="homeIcon"/>
      <h1>HOUZESY</h1>
    </div>
      <div className="popup-carousel-slider">
        {PopupImageData.map((item, index) => {
          return (
            <div
              className="popup-carousel-slide"
              key={index}
              style={{ transform: `translateX(${props.z}%)` }}
            >
              <PopupImageCarouselComp src={item.imgURL} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
