import React from "react";

import { FaArrowDown } from "react-icons/fa";


import "../styles/StyleHead.scss";
import "../styles/Stars.scss";

export default function Header() {

  return (

    <div className="header">
      <div className="stars"></div>
      <h4>Hello, my name is</h4>
      <h1><span>Linda Gustafsson</span></h1>
      <div className="andImDiv">
        <div><h3>And I'm a </h3></div>
        <div><h2> Developer, Designer and a Student</h2></div>
      </div>

      <h4 className="futureCollege">Maybe I'm your future colleague?</h4>

      <div className="arrow bounce"><FaArrowDown /></div>
    </div>

  );
}