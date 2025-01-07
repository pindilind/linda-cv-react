import React from 'react'
import "./styles/StylePopUp.scss";

function PopUp(props) {
  return (props.trigger) ? (
    <div className="popUp">
      <div className="popUp-inner">

        13-11-2024
        Right now I'm studying Technigo's UI Design training as an addition to my previous training in web development
        
        {props.children}

      </div>
<button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
    </div>
  ) : "";
}

export default PopUp