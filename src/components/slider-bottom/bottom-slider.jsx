import React, { useState } from "react";
import BottomSliderImgComp from "./bottom-slider-imgComp";
import sliderImageData from "./bottom-slider-data.js";
import BottomSliderBanner from "./bottom-slider-banner.jsx";
import "./bottom-slider.scss";
import DotButton from "./dotButton.jsx";
//import { Directions } from "@mui/icons-material";

export default function BottomSlider() {
  const [y, setY] = useState(0);


  // function handelRightBtn() {
  //   y === 0 ? setY(-100 * (sliderImageData.length - 1)) : setY(y + 100);
  // }
  // function handelLeftBtn() {
  //   y === -100 * (sliderImageData.length - 1) ? setY(0) : setY(y - 100);
  // }



  //--------------------------------------auto slide(time out function)---------------

  // function handelSlidings() {
  //   y === 0 ? setY(-100 * (sliderImageData.length - 1)) : setY(y + 100);
  // }
 
  // setTimeout(handelSlidings, 2000);

  //---------------------------- function will get called, when clicking on dot nav-btn ----
  function dotNavigation(id) {
    const no = id * -100;
    setY(no);
  }



  return (
    <div className="bottom-slide-main">
      <div className="bottom-slider">
        {sliderImageData.map((item, index) => {
          return (
            <div
              className="bottom-slide"
              key={index}
              style={{ transform: `translateX(${y}%)` }}
            >
              <BottomSliderBanner banner={item.banner} />
              <BottomSliderImgComp src={item.imgURL} />
            </div>
          );
        })}
        <div className="dotBtnDiv" style={{ position: "absolute" }}>
          {sliderImageData.map((items, id) => {
            return <DotButton itemId={id} 
                      handleDotNav={dotNavigation} 
                      currentItemId={-y/100}
                    />;
          })}
        </div>

        {/* <button id="sliderBtnLeft" onClick={handelLeftBtn}>
          
        </button>
        <button id="sliderBtnRight" onClick={handelRightBtn}>
         
        </button> */}

      </div>
    </div>
  );
}
