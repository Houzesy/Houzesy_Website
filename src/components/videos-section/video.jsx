
import { Button } from "@mui/material";
import React,{useState} from "react";
import ReactPlayer from "react-player";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import "./video.scss";

export default function Video(){
    

    const [playPause, setPlayPause] =useState(false);
    function handleClick(){
        setPlayPause((prevValue) => {
            return !prevValue;
        })
    }
       
    const divStyles={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        height: "500px",
    };
    
    return<>
       <div style={divStyles}>
            <ReactPlayer 
                width="60%" 
                height="80%" 
                control={false} 
                autoplay
                controls={true}
                //loop={true}
                playing={playPause}
                url="https://www.youtube.com/watch?v=GYf9UQcCyNM" 
                onError={() => {console.log("There is an error with url.")}}

            />
           
           <button id="play-btn" onClick={handleClick}>
                <PlayCircleFilledRoundedIcon style={{fontSize:"120px", visibility:playPause ? "hidden":"visible"}}/>
           </button>
           <button id="pause-btn" onClick={handleClick}>
                <PauseCircleFilledRoundedIcon style={{fontSize:"120px", visibility:!playPause ? "hidden":"visible"}}/>
           </button>
           
        </div>

    </>;
}