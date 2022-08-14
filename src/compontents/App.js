import React from "react";

import Header from "./header/Header";

import AboutMe from "./main/AboutMe";
import Event4U from "./main/Event4U";
import Stripe from "./main/Stripe";
import PinkyChat from "./main/PinkyChat";
import Skills from "./main/Skills";
import SkillDesign from "./main/DesignSkills";
import ImgGallery from "./main/ImgGallery";

import Footer from "./footer/Footer";

import CookieConsent, { Cookies } from "react-cookie-consent";

export default function App() {
  return (
    <>
    <Header />
    <CookieConsent
            debug={true}
            style={{ background: '#000', fontFamily: 'Gaegu' }}
            buttonStyle={{ background: '#a4161a', color: '#fff', fontFamily: 'Gaegu' }}
            buttonText="OK"
          >Letar du efter en junior utvecklare? Jag är tillgänglig! :) Keep Reading .</CookieConsent>
   <AboutMe />
   <Event4U />
   <PinkyChat />
   <Stripe />
   <Skills />
   <SkillDesign />
   <ImgGallery />
   <Footer />
   </>
    
  );
}