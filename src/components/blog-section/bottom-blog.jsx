import React from "react";
import "./bottom-blog.scss";
import bottomBlogImgData from "./bottom-blog-img-data";

export default function BottomBlog(){
    const styles = {
        img1:
        "https://media.architecturaldigest.com/photos/571675af9ed5af6a73fbd3db/master/w_2800,h_1860,c_limit/Wallpaper-rooms_04-wm.jpg",
        img2:
          "https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1601672191/content-items/005/913/586/01-original.jpg?1601672191",
        img3:
          "https://i.insider.com/5e7cd8780c2a621d7d00ed05?width=700",
        img4:
          "https://www.clairegarnerinteriors.com/wp-content/uploads/2014/02/cgi_interior-design-main-1024x680.jpg"
      };
    return<>
        <div className="bottom-blog-container">

            <div className="blog-top">
                <div className="blog-div-img1">
                    <img src={styles.img1} alt="img" />
                </div>
                <div className="blog-div-img2">
                    <img src={styles.img2} alt="img" />
                </div>
                <div className="blog-div-img3">
                    <img src={styles.img3} alt="img" />
                </div>
                <div className="blog-div-img4">
                    <img src={styles.img4} alt="img" />
                    <button id="img-data-counter-btn">+{bottomBlogImgData.length - 4}</button>

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
    </>;
}