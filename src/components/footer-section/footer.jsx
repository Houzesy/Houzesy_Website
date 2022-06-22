import React from "react";
import "./footer.css";
import logo from "./logo.png";

export default function Footer() {
  return (
    <>
     
      <footer className="footer-distributed">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-4 col-xm-8 col-6 col-xl-3 col-xxl-3">
            <div className="footer-left ">
              <img src={logo} />
            </div>
          </div>

          <div className="col-md-2 col-lg-2 col-sm-4 col-xm- col-6 col-xl-2 col-xxl-2">
            <div className="footer-center">
              <h3>Address</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

</p>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-3 col-xm-6 col-6 col-xl-2 col-xxl-2">
            <div className="footer-center">
              <h3>Contact </h3>

              <div>
                {/* <p>Phone: +91 9911189974 Email: real.houzesy@gmail.com</p> */}
                
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  
                
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-3 col-xm-6 col-6 col-xl-2 col-xxl-2">
            <div className="footer-right">
              <h3>Office Hours</h3>

              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  
                 
             
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-4 col-xm-8 col-6 col-xl-3 col-xxl-3">
          <div className="footer-right">
          <h3></h3>
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
        
          
        </div>
        <div className="row secondline">
          <div className="col-md-5 col-lg-5 col-sm-5 col-xm-6 col-6 col-xl-5 col-xxl-5">
            <p className="text-left"> ©Houzesy 2022| Made with love in INDIA</p>
          </div>
         
          <div className="col-md-7 col-lg-7 col-sm-6 col-xl-7 col-xxl-7">
           
           <ul className="abcd">
     
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Home Decor</a></li>
      <li><a href="#">Architect Planning</a></li>
      <li><a href="#">Interior Design</a></li>
    </ul></div>
        </div>
      </footer>
    </>
  );
};

