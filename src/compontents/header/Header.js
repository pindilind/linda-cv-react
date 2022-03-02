import React from "react";

import { TiHeart } from "react-icons/ti";
import { FaArrowDown } from "react-icons/fa";

import "../styles/StyleHead.scss";
import "../styles/Stars.scss";

export default function Header() {
  return (
    
   <div className="header">
     <div className="stars"></div>
     <h1>HELLO, MY NAME IS <span>LINDA</span> AND I'M A FUTURE WEB DEVELOPER <TiHeart /> </h1>
     <div className="arrow bounce"><FaArrowDown /></div>
     </div>
    
  );
}