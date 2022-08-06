import React from "react";

import "../styles/StyleSkills.scss";

import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";

export default function AboutMe() {

  return (

    <div className="skill">

      <div class="skillDiv">
        <div class="text-content-skill">
          <h2 class="textStyle">Programmeringsfärdigheter</h2>
          <p>
          Det är de programmen jag har lärt mig hittills under min tid på Medieinstitutet. Procentsatserna som visas på staplarna är en uppskattning av hur långt mina kunskaper har utvecklats i dessa vissa program hittills. Detta avsnitt kommer att uppdateras regelbundet allt eftersom.
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