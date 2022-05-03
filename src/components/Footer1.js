import React from "react";
import "./Footer.css";
import logo from "./logo.png";

const Footer1 = () => {
  return (
    <>
      <header>
        <h2 className="py-5"> Makes The Rush Easier </h2>
        <h1>Welcome To HOUZESY</h1>
        <h2>
          <span>Your one-stop place for Home Design, Interior, and Decor.</span>
        </h2>
      </header>

      <footer className="footer-distributed">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <div className="footer-left ">
              <img src={logo} />
            </div>
          </div>

          <div className="col-md-2 col-lg-2">
            <div className="footer-center">
              <h3>About us</h3>
              <p>Houzesy is a one stop platform for Home Design Interior & Decor

</p>
            </div>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="footer-center">
              <h3>Pages </h3>

              <div>
                {/* <p>Phone: +91 9911189974 Email: real.houzesy@gmail.com</p> */}
                
                  <p>Home Page</p>
                  <p>Professional</p>
                  <p>Project</p>
                  <p>Blogs</p>
                  <p>Contact Us</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="footer-right">
              <h3>Support</h3>

              
              <p>FAQ</p>
                  <p>Support Center</p>
                  <p>Security</p>
                 
              {/*  */}
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
          <div className="footer-right">
          <h3>Contact Details</h3>
            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div></div>
        <div className="row">
          {/*  */}
          
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <p className="text-left"> ©Houzesy 2022| Made with love in INDIA</p>
          </div>
          <div className="col-md-2 col-lg-2">
            <a>Privacy Policy</a>
          </div>
          <div className="col-md-2 col-lg-2">
            <a>Home Decor</a>
          </div>
          <div className="col-md-2 col-lg-2">
            <a>Architect Planning</a>
          </div>
          <div className="col-md-2 col-lg-2">
            <a>Interior Design</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
