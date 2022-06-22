import React from "react";
import "./navbar.css";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <div className="nav-wrapper-div">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* <img className="logo1" src={logo} />
            <a href="#">HOUZ<span>ESY</span></a></div> */}
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links mx-auto">
            <label for="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">PROJECT</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                PHOTOS
              </a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                PHOTOS
              </label>
              <ul className="drop-menu photosDrop">
                <li>
                  <a href="#">Kitchen & Dining</a>
                </li>
                <li>
                  <a href="#">Living</a>
                </li>
                <li>
                  <a href="#">Bedroom</a>
                </li>
                <li>
                  <a href="#">More Rooms</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="desktop-item">
                PROFESSIONAL
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                PROFESSIONAL
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Design & Renovation</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Architects & Designs</a>
                      </li>
                      <li>
                        <a href="#">Designers & Decorators</a>
                      </li>
                      <li>
                        <a href="#">Civil Engineers & Contractors</a>
                      </li>
                      <li>
                        <a href="#">Design-Build Firms</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Home Improvement</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Furniture & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Flooring & Carpet</a>
                      </li>
                      <li>
                        <a href="#">Tile, Stone & Countertop</a>
                      </li>
                      <li>
                        <a href="#">Bedding & Bath</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Some More Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Kitchen & Bath Designers</a>
                      </li>
                      <li>
                        <a href="#">Architects & Contractors</a>
                      </li>
                      <li>
                        <a href="#">Builders & Construction Co.</a>
                      </li>
                      <li>
                        <a href="#">Specialty Contractors</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li>
              <a href="#">BLOGS</a>
            </li>
            <li id="horizontal-line">|</li>
            <li>
              <a href="#" className=" navbar-sign-in-btn">
                
                <input type="submit" value="Submit" className="text-right"/>
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="navbar-sign-up-btn">
                
                <input type="submit" value="Submit" className="text-right" />
                Sign up
              </a>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>

        {/* <div className="searchbar"> */}
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              className="form-control"
              style={{ width: "60%", marginBottom: "50px", borderRadius:"5px"}}
              placeholder="Search photos, products, projects & more..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
