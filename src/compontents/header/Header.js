import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

import VideoPlayer from "react-background-video-player";
import PexelsVideo from "../assets/Pexels Videos 1494291.mp4";
import "../styles/StyleHead.scss";
/* import "../styles/Stars.scss"; */
import "../styles/Video.scss";

export default function Header() {

  return (
    <>



      <div className="header">
        <div className="headerTwo">

          <div><h1 className="titlePortfolio">PORTFOLIO</h1></div>
          <div className="row">
          <div><a href="https://www.linkedin.com/in/linda-gustafsson-234aa9212"> <FaLinkedin /> </a> </div>
          <div><a href="https://github.com/pindilind"> <FaGithubSquare /> </a></div>
        
          </div>

        </div>

        <div className="stars">
          <VideoPlayer
            className="videoStyle"
            src={PexelsVideo}
            autoPlay={true}
            muted={true}
          />

        </div>

        <div className="flex">
          <h1><span>Linda Gustafsson</span></h1>
          <h4>FRONTEND DEVELOPER</h4>
            {/* <div className="andImDiv">
        <div><h3>And I'm a </h3></div>
        <div><h2>frontend developer who is looking for a job</h2></div>
      </div> */}
       

         {/*  <h4 className="futureCollege">Maybe I'm your future colleague?</h4> */}
        </div>
        <div className="arrow bounce"><FaArrowDown /></div>
      </div>
    </>

  );
}