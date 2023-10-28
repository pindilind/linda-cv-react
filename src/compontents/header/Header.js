
import { Link } from "react-router-dom";

import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

import VideoPlayer from "react-background-video-player";
import PexelsVideo from "../assets/Pexels Videos 1494291.mp4";
import "../styles/styleHeader.scss";
/* import "../styles/Stars.scss"; */
import "../styles/Video.scss";
import SelfieNew from "../assets/helloo.svg"

export default function Header() {

  return (
    <>

      <div className="headerTop">

        <div><h1 className="titlePortfolio">PORTFOLIO</h1></div>

        <div className="row">

          <div className="titleBox">
            <Link style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }} to="/aboutMe">
              ABOUT ME
            </Link>

            <Link style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }} to="/designSkills">
              MY DESIGN SKILLS
            </Link>

            <Link style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }} to="/skills">
              MY SKILLS
            </Link>

            <Link style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }} to="/">
              MY PROJECTS
            </Link>

          </div>


          <div className="iconStyle">
            <a href="https://www.linkedin.com/in/linda-gustafsson-234aa9212"> <FaLinkedin /> </a>
            <a href="https://github.com/pindilind"> <FaGithubSquare /> </a>
          </div>

        </div>

      </div>


    </>

  );
}