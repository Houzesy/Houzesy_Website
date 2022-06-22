import React from "react";
import "./top-blog.scss";
import topBlogImgData from "./top-blog-img-data";
export default function TopBlog() {

  
  const styles = {
    img1:
    "https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg",
    img2:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/static/optimized/rev-2b3fe8f/online-decorating/wp-content/uploads/2021/05/Inviting-natural-sunlight-in-modern-lighting-interior-design.jpg",
    img3:
      "https://interiordesign.net/wp-content/uploads/2022/03/Interior-Design-Andrea-Rodman-Interiors-Victoria-British-Columbia-1.-AndreaRodman_OakBay-_1442-EDITED.jpg",
    img4:
      "https://mydecorative.com/wp-content/uploads/2020/02/Unique-Interior-Design.jpg"
  };
  return (
    <>

      <div className="top-blog-container">
        <h1>Our Blogs</h1>

        <div className="blog-top">

          <div className="blog-img1-div">
            <img src={styles.img1} alt="img" />
          </div>

          <div className="blog-img2-div">
            <img src={styles.img2} alt="img" />
          </div>

          <div className="blog-img3-div">
            <img src={styles.img3} alt="img" />
            </div>

          <div className="blog-img4-div">
            <img src={styles.img4} alt="img" />
            <button id="img-data-counter-btn">+{topBlogImgData.length - 4}</button>
          </div>
        </div>

        <div className="blog-bottom"> 
          <div className="blog-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Et senectus at habitant phasellus sit urna at. 
              At maecenas elementum arcu quis. 
              Scelerisque leo, dolor, vulputate praesent vel et.
              Malesuada sed pretium amet pharetra ultrices id nisi.
            </p>
          </div>
          <div className="blog-btn-div">
            <button id="save-article-btn">Save the article</button>
            <button id="read-more-btn">Read more ⇢</button>
          </div>
        </div>
      </div>
    </>
  );
}
