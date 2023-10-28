import React from "react";

import Header from "../header/Header";

import "../styles/StyleSkillsDesign.scss";


export default function AboutMe() {

  return (

    <div className="skillDesign">
      <Header />

      <div class="skillDivDesign">
        <div class="text-content-skill-design">
          <h2 class="textStyle">- Design skills -</h2>
          <p>
          These are the programs I have taught myself. I've got I think it's fun with design and photography so I've tried to learn when I've found time for it.
          </p>

          <div className="btnDiv-design">
            <p> </p>
          </div>
        </div>

        <div class="skillRatesDiv-design">

          <div class="bars">
            <div class="info-design">
              <div>FIGMA</div>
              <div>40%</div>
            </div>
            <div class="line6"></div>
          </div>

          <div class="bars">
            <div class="info-design">
              <div>PHOTOFILTRE</div>
              <div>50%</div>
            </div>
            <div class="line7"></div>
          </div>

          <div class="bars">
            <div class="info-design">
              <div>SKETCHUP</div>
              <div>45%</div>
            </div>
            <div class="line8"></div>
          </div>

          {/* <div class="bars">
            <div class="info-design">
              <div>PHP</div>
              <div>20%</div>
            </div>
            <div class="line9"></div>
          </div> */}

          {/*   <div class="bars">
            <div class="info-design">
              <div>MYSQL</div>
              <div>35%</div>
            </div>
            <div class="line10"></div>
          </div> */}

        </div>
      </div>
    </div>

  );
}