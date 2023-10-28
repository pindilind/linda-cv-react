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
      MY EDUCATION
      </button>
      <Modal
        className={classes.top}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={'scroll'} id={'styleDivAbout'}>
          <h3 className={classes.styleH3}>MY EDUCATION</h3>
          <p className={classes.pStyle}>

            <text>
            {/* <b> The education is a Yh education of 2 years and 400 Yh points and the content is, among other things: </b> <br />
              <br /> - Front- and backend (HTML5, CSS3, Javascript, JQuery, React, Vue, JSON och SQL) including responsiveness <br />

              <br /> -System development - PHP, object- and function-oriented programming, testing, server environment and server technology <br />

              <br /> - E-commerce - how to organize an e-commerce with today's requirements and development towards one of the most common e-commerce systems <br />

              <br /> -Systemstöd och tredjepartssystem med betalnings- och affärssystem samt logistik inom e-handel <br />

              <br /> - LIA / Praktik på företag i branschen, cirka en tredjedel av studietiden. <br /> */}
              <b> The education is a Yh education of 2 years and 400 Yh points and the content is, among other things: </b> <br />
              <br /> - Front and backend development (HTML5, CSS3, Javascript, JQuery, React, Vue, JSON and SQL) including responsiveness <br />

              <br /> - System development - PHP, object- and function-oriented programming, testing, server environment and server technology <br />

              <br /> - E-commerce - how to organize an e-commerce with today's requirements and development towards one of the most common e-commerce systems <br />

              <br /> -System support and third-party systems with payment and business systems as well as logistics in e-commerce <br />

              <br /> - LIA / Internship at companies in the industry, approximately one third of the study period. <br /> 

              <br /> Do you want to read more about my education? <a className={classes.aStyle} href="https://medieinstitutet.se/utbildningar/webbutvecklare-inom-e-handel/"> Push here!</a><br />

            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}