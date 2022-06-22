import React from "react";
import "./top-submit-project.scss";

export default function TopSubmitProject() {
  const styles = {
    img:
      "https://super.homelane.com/other%20interiors/16364335777383ceb4b34b972-HLKT00000763_resize-800x600_5-main.jpg"
  };
  return (
    <div className="top-submit-project-container">
      <div className="blog">
        <h1>Welcome to HOUZESY</h1>
        <p>Your one-stop place for Home Design, Interior and Decor</p>
        <button id="submit-btn">Submit your project</button>
      </div>
      <div className="img-div">
        <img src={styles.img} alt="" />
      </div>
    </div>
  );
}
