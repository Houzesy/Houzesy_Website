import React, { useState } from "react";
import "./signin-popup.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SignUpPopUp from "./signup-popup";
import PopUpCarousel from "./popup-carousel";


export default function LoginPopUp(props) {
  //---------------------Input Text (email,password) events------------------------
  let [inputTxt, setInputTxt] = useState({
    email: "",
    password: ""
  });
  function handleChange(event) {
    let { name, value } = event.target;
    setInputTxt((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  //------------------------Check Box Hook----------------------------
  let [isChecked, setIsChecked] = useState(false);
  function handleChecked() {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
  }

  //--------------------------Clear Input Fields--------------------
  function handleClear() {
    setInputTxt("");
  }

  
//-----------------------Signup visibility-----------------------------
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  function handleSignUp() {
    setIsSignupVisible((prevValue) => {
      return !prevValue;
    });
  }

//-----------------------Return Codes-----------------------------


  return (
    <div
      className="popup-box"
      style={{
        visibility: props.signInVisible || isSignupVisible ? "hidden" : "visible"
      }}
    >
      <PopUpCarousel isVisible={props.signInVisible} z={props.zValue} />
      <SignUpPopUp signUpVisible={isSignupVisible} signInVisible= {props.signInVisible} handleSignUpCrossBtnClick={handleSignUp}/>


      <p className="inputDetails">{inputTxt.email}</p>
      <p className="inputDetails">{inputTxt.password}</p>
      <div className="signin-popup-content">
        <CloseRoundedIcon
          className="signin-cross-btn"
          sx={{
            fontSize: "30px",
            color: "#DFDFDE",
            "&:hover": {
              color: "#151D3B"
            }
          }}
          onClick={() => {
            props.handleSignInCrossBtnClick();
            handleClear();
          }}
        />

        <h2 className="signin-heading">SIGN IN</h2>
        <p className="signin-para">Email</p>
        <input
          className="signin-txt-input"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          value={inputTxt.email}
        />
        <p className="signin-para">Password</p>
        <input
          className="signin-txt-input"
          type={!isChecked ? "password" : "text"}
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          value={inputTxt.password}
        />
        <input className="signin-checkBox" type="checkbox" onChange={handleChecked} />
        <p className="paraShowPw">show password</p>
        <button className="forgetPass">Forget Password?</button>

        <button className="popup-signin-btn" onClick={handleClear}>
          Sign in →
        </button>

        <hr className="hrLine" />
        <p className="hrPara">Or</p>
        <hr className="hrLine" />
        <div className="googleLogo">
          <img
            className="g_img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20210618182606"
            alt="google_logo"
          />
          <p className="g_para">Continue with Google</p>
        </div>
        <button
          className="signupBtn"
          onClick={() => {
            handleSignUp()
            
          }}
        >
          Sign up
        </button>
        {/* <SignUpPopUp Signup={isSignup} onhandleSignup={handleSignup} /> */}
      </div>
    </div>
  );
}
