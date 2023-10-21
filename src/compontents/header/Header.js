import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

import VideoPlayer from "react-background-video-player";
import PexelsVideo from "../assets/Pexels Videos 1494291.mp4";
import "../styles/StyleHead.scss";
/* import "../styles/Stars.scss"; */
import "../styles/Video.scss";
import SelfieNew from "../assets/helloo.svg"

export default function Header() {

  return (
    <>



      <div className="headerBackground">
        <div className="headerTop">

          <div><h1 className="titlePortfolio">PORTFOLIO</h1></div>
          <div className="row">
            <div><a href="https://www.linkedin.com/in/linda-gustafsson-234aa9212"> <FaLinkedin /> </a> </div>
            <div><a href="https://github.com/pindilind"> <FaGithubSquare /> </a></div>

          </div>

        </div>

        <div className="stars">
          {/* <VideoPlayer
            className="videoStyle"
            src={PexelsVideo}
            autoPlay={true}
            muted={true}
          /> */}

        </div>

        <div className="flexMiddle">
          <div className="flexAbsolute"> 
            <div className="flexName">
              <div><h1>Linda Gustafsson</h1></div>
              <div><h4>FRONT-END DEVELOPER</h4></div>
            </div>

            <div className="flexSelfie">
              <img
                id="selfieNew"
                src={SelfieNew}
                alt="logoTest"
              />
            </div>

          </div>
          <div className="arrow bounce"><FaArrowDown /></div>
        </div>

      </div>
    </>

  );
}