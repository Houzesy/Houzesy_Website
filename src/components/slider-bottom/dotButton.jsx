import React, { useState } from "react";
import "./dotButton.scss";

export default function DotButton(props) {
  const [dotState, setDotState] = useState(false);

  return (
    <>
      <button
        className="dotButton"
        style={{ backgroundColor: props.currentItemId === props.itemId ? "rgba(1, 144, 234, 1)" : "rgba(205, 205, 205, 1)" }}
        onClick={() => {
          props.handleDotNav(props.itemId);
          // handleClick();
        }}
      ></button>
    </>
  );
}
