import React, { useState } from "react";
import "./App.scss";
import Card from "./components/card-section/card";
import cardDate from "./components/card-section/cardData";
import Carousel from "./components/carousel-section/carousel";
import CardGallery from "./components/card-section/cardGallery";
import SliderMiniCarousel from "./components/slider-mini-Comp/slider-mini-carousel";
import MainBlog from "./components/blog-section/main-blog";
import DarkCard from "./components/dark-card-section/darkCard";
import BottomSlider from "./components/slider-bottom/bottom-slider";
import Footer from "./components/footer-section/footer";
import NavBar from "./components/header-navbar-section/navbar";
import TopSubmitProject from "./components/submit-project-section/top-submit-project";
import BottomSubmitProject from "./components/submit-project-section/bottom-submit-project";
import Video from "./components/videos-section/video";

export default function App() {
  const [isCardGalleryVisible, setIsCardGalleryVisible] = useState(false);

  function handleClick() {
    setIsCardGalleryVisible((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div id="main-page">
      <div id="navbar">
        <NavBar />
      </div>
      <div className="top-submit-project-div">
        <TopSubmitProject />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <div>
        <MainBlog />
      </div>
      <div>
        <Video />
      </div>
      <div className="mini-carousel-heading">
        <h2>See more stories...</h2>
      </div>
      <div className="slider-mini-carousel-main">
        <SliderMiniCarousel />
      </div>

      <div>
        <div className="dark-card-heading">
          <h1>Design services you will get</h1>
          <h3>we help you in creating cozy room atmosphere</h3>
        </div>
        <DarkCard />
        <div className="dark-card-footer">
          <h3>"Our Customers and Community are always our priority"</h3>
          <h3>— Team Housezy</h3>
        </div>
      </div>
      <div>
        <div
          className="cardGalleryClass"
          style={{ display: isCardGalleryVisible ? "block" : "none" }}
        >
          <CardGallery handleVisiblity={handleClick} />
        </div>
        <div className="cardHeading">
          <h1>Browse ideas by room</h1>
          <h3>Develop a personal style that's all your owns</h3>
        </div>
        <div className="cardMainContainer">
          {cardDate.map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  src={item.imgURL}
                  name={item.name}
                  area={item.area}
                  ratings={item.ratings}
                />
              </>
            );
          })}
        </div>
        <div className="seeAllButtonDiv">
          <button id="card-gallery-see-all-btn" onClick={handleClick}>
            <span> See All ⇢</span>
          </button>
        </div>
      </div>
      <div className="bottom-slider-div-container">
          <BottomSlider />
      </div>
      <div>
        <BottomSubmitProject />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
