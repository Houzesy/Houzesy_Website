import React from "react";
import "./bottom-submit-project.scss";

export default function BottomSubmitProject() {
    return <>
    <div className="bottom-submit-project-container">
        <div className="top-part">
            <p>Think you can't afford beautiful design ? Think again.</p>
            <button>Submit your project</button>
        </div>

        <div className="bottom-part">
            <div className="icon1 icons"></div>
            <div className="icon2 icons"></div>
            <div className="icon3 icons"></div>

            <div className="save-time-div btn-para-div">
                <button id="btn1">Save time</button>
                <p>Realistic 3D model & top professional help to take the guesswork out of the designing process.</p>
            </div> 

            <div className="save-money-div btn-para-div">
                <button id="btn2">Save money</button>
                <p>Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.</p>
            </div> 

            <div className="convenient-stressfree-div btn-para-div">
                <button id="btn3">Convenienct & stressfree</button>
                <p>A fun and easy white-glove service including everything from design to convenient ordering.
</p>
            </div>

        </div>
    </div>
    </>;
}