import React from "react";

import "../styles/StyleAboutMe.scss";
import Selfie from "../assets/miglo.jpg";

import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";
export default function AboutMe() {

  return (

    <div className="aboutMeDiv">

      <div class="aboutMeDivTwo">
        <div class="text-content">
          <h2>About Me </h2>
          <p>
            Thinking about what you want to do when you grow up can sometimes be a challenge. But in 2020, I chose to apply to Medieinstitutet in Gothenburg. The choice of my education Web developer in E-commerce is based on the fact that as a child I had an interest in simpler development but also to be creative.

            The interest was born when it became popular to start blogging. My passion was not to write things on the blog, but I discovered that you could develop the page with code, which I did more often than writing something. So here am I today, soon finnsish at studying at Medieinstitutet (May 20/5 2022).

          </p>
          <p>
            In addition to my interest in development. So I like to photograph, edit pictures and interior design but also spend time with my partner and the dog in the woods. Together we have now bought a house, which feels great. There will be some renovation and gardening in the future, which I also think is fun.
          </p>

          <div className="btnDiv">
            <div><WorkplacesModal /></div>
            <div><School /></div>
          </div>
        </div>

        <div class="profile-pic-div">
          <img id="selfie" src={Selfie} alt="Selfie" />
        </div>
      </div>
    </div>

  );
}