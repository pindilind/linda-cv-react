import React from "react";

import Header from "./header/Header";
import AboutMe from "./main/AboutMe";
import Skills from "./main/Skills";
import SkillDesign from "./main/DesignSkills";
import Footer from "./footer/Footer";
import ImgGallery from "./main/ImgGallery";


export default function App() {
  return (
    <>
    <Header />
   <AboutMe />
   <Skills />
   <SkillDesign />
   {/* <ImgGallery /> */}
  {/*  <Footer /> */}
   </>
    
  );
}