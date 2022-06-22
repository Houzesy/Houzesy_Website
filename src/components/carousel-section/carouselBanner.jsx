import React from "react";
import "./carousel.scss";


export default function CarouselBanner(props) {
  return <>
  <div className="carosel-banner">
   <div>
      <h1>{props.headings}</h1>
      <p>{props.paragraphs}</p>
    </div>
  </div>
  </>;
}
