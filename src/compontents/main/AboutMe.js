import "../styles/StyleAboutMe.scss";
import Selfie from "../assets/miglo.jpg";

import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";
export default function AboutMe() {

  return (

    <div className="aboutMeDiv">

      <div class="aboutMeDivTwo">
        <div class="text-content">
          <h2 class="textStyle">Om Mig</h2>
          <p>
            Att fundera kring vad man vill göra när man blir stor kan ibland vara en utmaning. Men 2020 valde jag att söka till Medieinstitutet i Göteborg. Valet av min utbildning Webbutvecklare inom E-handel bygger på att jag som barn hade ett intresse av enklare utveckling men också att vara kreativ.

          </p>
          <p>
            Utöver mitt intresse för utveckling. Så jag gillar att fotografera, redigera bilder och inredning men umgås också med min sambo och hunden i skogen. Tillsammans har vi nu köpt ett hus vilket känns jättebra. Det kommer att bli en del renovering och trädgårdsarbete i framtiden, vilket jag också tycker är kul.
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