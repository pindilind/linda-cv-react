import React from "react";

import Modal from '@mui/material/Modal';
import "../styles/StyleAboutMe.scss";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  top: {
    marginTop: '5rem'
  },
  styleH3: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    marginBottom: 0,
    '@media (max-width: 480px)': {
      fontSize: '0.8'
    }
  },

  pStyle: {
    color: 'white',
    width: '80%',
    '@media (max-width: 480px)': {
      fontSize: '0.8'
    }
  },
  aStyle: {
    textDecoration: 'none',
    color: '#a4161a',
    wordBreak: 'break-word',
  }

});

export default function School() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);


  return (

    <>
      <button className="button1" onClick={handleOpen}>
        Min Utbildning
      </button>
      <Modal
        className={classes.top}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={'scroll'} id={'styleDivAbout'}>
          <h3 className={classes.styleH3}>Min Utbildning</h3>
          <p className={classes.pStyle}>

            <text>
            <b> Utbildningen är en Yh-utbildning på 2 år och 400 Yh-poäng och innehållet är bland annat: </b> <br />
              <br /> - Front- och backendutveckling (HTML5, CSS3, Javascript, JQuery, React, Vue, JSON och SQL) inklusive responsivitet <br />

              <br /> - Systemutveckling - PHP, objekt- och funktionsorienterad programmering, testning, servermiljö och serverteknik <br />

              <br /> - E-handel - hur man organiserar en e-handel med dagens krav och utveckling mot ett av de vanligaste e-handelssystemen <br />

              <br /> -Systemstöd och tredjepartssystem med betalnings- och affärssystem samt logistik inom e-handel <br />

              <br /> - LIA / Praktik på företag i branschen, cirka en tredjedel av studietiden. <br />
              {/* <b> The education is a Yh education of 2 years and 400 Yh points and the content is, among other things: </b> <br />
              <br /> - Front and backend development (HTML5, CSS3, Javascript, JQuery, React, Vue, JSON and SQL) including responsiveness <br />

              <br /> - System development - PHP, object- and function-oriented programming, testing, server environment and server technology <br />

              <br /> - E-commerce - how to organize an e-commerce with today's requirements and development towards one of the most common e-commerce systems <br />

              <br /> -System support and third-party systems with payment and business systems as well as logistics in e-commerce <br />

              <br /> - LIA / Internship at companies in the industry, approximately one third of the study period. <br /> */}

              <br /> Vill du läsa mer om min utbildning? <a className={classes.aStyle} href="https://medieinstitutet.se/utbildningar/webbutvecklare-inom-e-handel/"> Klicka här!</a><br />

            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}