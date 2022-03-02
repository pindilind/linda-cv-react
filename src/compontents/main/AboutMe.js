import React from "react";

import "../styles/StyleAboutMe.scss";
import Selfie from "../assets/selfie.svg";

import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";

export default function AboutMe() {
  return (

    <div className="aboutMeDiv">

      <div class="aboutMeDivTwo">
        <div class="text-content">
          <h2>Om Mig</h2>
          <p>
            Att fundera kring vad man vill göra när man blir stor kan ibland vara en utmaning. Men år 2020 valde jag att söka till Medieinstitutet i Göteborg. Valet av min utbildning Webbutvecklare inom E-handel grundar sig i att jag som liten haft intresse för enklare utveckling men också att vara kreativ.

            Intresset föddes när det blev populärt att börja blogga. Min passion låg inte i att skriva saker på bloggen, utan jag upptäckte att man kunde utveckla sidan med kod vilket jag gjorde oftare än att skriva något. Så här här jag idag, snart pluggat mitt första år på Medieinstitutet.

            Förutom mitt intresse för utveckling. Så tycker jag om att fotografera, redigera bilder och inredning men också tillbringa tid tillsammans med sambon och hunden i skogen. Tillsammans har vi nu köpt hus, vilket känns stort. Det kommer bli en del renovering och trädgårsdarbete framöver vilket jag också tycker är kul.
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