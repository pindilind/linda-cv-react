import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./header/Header";
import StartPage from "./main/StartPage";
import AboutMe from "./main/AboutMe";
import Event4U from "./main/Event4U";
import Stripe from "./main/Stripe";
import PinkyChat from "./main/PinkyChat";
import Skills from "./main/Skills";
import DesignSkills from "./main/DesignSkills";
import ImgGallery from "./main/ImgGallery";

import Footer from "./footer/Footer";

import CookieConsent, { Cookies } from "react-cookie-consent";

export default function App() {

  return (

    <Router>
      
      <Switch>
    
        <Route exact path="/linda-cv-react"> 
          <StartPage />
         </Route> 

        {/* <CookieConsent
            debug={true}
            style={{ background: '#000', fontFamily: 'Gaegu' }}
            buttonStyle={{ background: '#a4161a', color: '#fff', fontFamily: 'Gaegu' }}
            buttonText="OK"
          >Letar du efter en junior utvecklare? Jag är tillgänglig! :) Keep Reading .</CookieConsent> */}
       <Route exact path="/aboutMe"> 
       <AboutMe /> 
        </Route>
       
        <Route exact path="/DesignSkills"> 
       <DesignSkills /> 
        </Route>

        <Route exact path="/skills"> 
       <Skills /> 
        </Route>
       
       {/* 
   <Event4U />
   <PinkyChat />
   <Stripe />
   <Skills />
   <SkillDesign />
   <ImgGallery />
   <Footer /> */}

      </Switch>
    </Router>


  );
}