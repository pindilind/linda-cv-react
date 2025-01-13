import Header from "../header/Header";
import "../styles/StyleAboutMe.scss";
import Selfie from "../assets/me2.jpg";


import WorkplacesModal from "./WorkPlacesModal";
import School from "./School";
export default function AboutMe() {

  return (

    <div className="aboutMeDiv">

      <Header />
      <div class="aboutMeDivTwo">
        <div class="text-content">
          <h2 class="textStyle">- About Me - </h2>

          <h3 class="textStyleTwo">Are you looking for a humble and ambitious frontend developer
            with a high work ethic?</h3>
          <h3 class="textStyleTwo">Then it's definitely me you're looking for!</h3>

          <div class="textBox">
          <p>
            Who am I?
            My name is Linda, I'm 30 years old and I graduated from Medieinstitutet 2022 -
            web developer in E-commerce. Now I'm really looking forward to a
            A new challenge in a new industry.I wanted to study to become a developer because I want to work more creatively
            and as a child had an interest in easier development. An interest that
            never cooled down.

          </p>
          <p>
            Currently I work at Volvo Cars AB in Gothenburg as a
            forklift driver and is responsible for delivering materials to the tracks on time.
            I would describe myself as a positive, meticulous, hard-working person
            and responsible girl who works well in team
          </p>
          </div>

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