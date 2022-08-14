import "../styles/StylePinky.scss";
import PinkyChatPic from "../assets/pinkyChatPic.svg";


export default function PinkyChat() {

  return (

    <div id="pinkyDiv">

      <div class="pinkyDivTwo">
        <div class="text-content-pinky">
          <h2 class="textStylePinky">PinkyChat</h2>
          <p>
          Denna applikation är ett chattrum. Njut av en trevlig pratstund med gamla och nya vänner!

          </p>

          <p>
          Socket.io | Web API integration | Node.js | Express
          </p>
          <p>
          Kolla in projektet <a href="https://github.com/pindilind/socketChat.git"> github.com/pindilind/socketChat</a> 
          </p>

        </div>

        <div class="pinky-pic-div">
          <img id="pinky" src={PinkyChatPic} alt="Selfie" />
        </div>
      </div>
    </div>

  );
}