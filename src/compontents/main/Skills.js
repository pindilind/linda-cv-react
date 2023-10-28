import React from "react";


import "../styles/StyleSkills.scss";

import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";
import Header from "../header/Header";

export default function AboutMe() {

  return (

    <div className="skill">
      <Header />

      <div class="skillDiv">
        <div class="text-content-skill">
          <h2 class="textStyle">- Programming skills - </h2>
          <p>
          These are the programs I have learned so far during my time at the Media Institute. The percentages shown on the bars are an estimate of how far my skills have progressed in these particular programs so far. This section will be updated regularly as time goes on.
          </p>
    
          <div className="btnDiv">
          {/* <p>Read about my design skills below </p> */}
          </div>
        </div>

        <div class="skillRatesDiv">

          <div class="bars">
            <div class="info">
              <div>HTML</div>
              <div>90%</div>
            </div>
            <div class="line1"></div>
          </div>

          <div class="bars">
            <div class="info">
              <div>CSS</div>
              <div>80%</div>
            </div>
            <div class="line2"></div>
          </div>

          <div class="bars">
            <div class="info">
              <div>JAVASCRIPT</div>
              <div>60%</div>
            </div>
            <div class="line3"></div>
          </div>

          <div class="bars">
            <div class="info">
              <div>PHP</div>
              <div>20%</div>
            </div>
            <div class="line4"></div>
          </div>

          <div class="bars">
            <div class="info">
              <div>MYSQL</div>
              <div>35%</div>
            </div>
            <div class="line5"></div>
          </div>
        </div>
      </div>
    </div>

  );
}