import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

import VideoPlayer from "react-background-video-player";
import PexelsVideo from "../assets/Pexels Videos 1494291.mp4";
import "../styles/StyleStart.scss";
/* import "../styles/Stars.scss"; */
import "../styles/Video.scss";
import SelfieNew from "../assets/helloo.svg"
import Header from "../header/Header"
import PopUp from "../PopUp";

export default function StartPage() {

  const [buttonPopup, setButtonPopup] = useState(true);

  return (
    <>
    
    <div className="headerBackground">
        <Header />

        <div className="stars">
          {/* <VideoPlayer
            className="videoStyle"
            src={PexelsVideo}
            autoPlay={true}
            muted={true}
          /> */}

        </div>
{/* <div className="underConstruction">UNDER CONSTRUCTION</div> */}
        <div className="flexMiddle">
          <div className="flexAbsolute">
            <div className="flexName">
              <div><h1>Linda Gustafsson</h1></div>
              <div><h4>FRONT-END DEVELOPER</h4></div>
              <button onClick={() => setButtonPopup(true)}>Read news about me!</button>
              <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
               
              </PopUp>
            </div>

            <div className="flexSelfie">
              <img
                id="selfieNew"
                src={SelfieNew}
                alt="logoTest"
              />
            </div>

          </div>
          {/* STUDSANDE PIL */}
          {/* <div className="arrow bounce"><FaArrowDown /></div> */}
        </div>

      </div>
    </>

  );
}