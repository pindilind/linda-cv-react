import React from "react";

import Modal from '@mui/material/Modal';
import "../styles/StyleAboutMe.scss";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  styleDiv: {
    borderRadius: '5px',
    backgroundColor: '#282623',
    display: "flex",
    overflow: 'auto',
    maxWidth: '50%',
    boxShadow: "none",
    marginTop: '2rem',
    padding: '1',
    margin: 'auto',
    fontFamily: 'Montserrat',
    flexDirection: 'column',
    padding: '1rem',
    height: '60%',

    '@media (max-width: 480px)': {
      minWidth: '90%',
      marginTop: '4rem',
      padding: '0.5rem',
    }
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

});

export default function School() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);


  return (

    <>
      <button className="button1" onClick={handleOpen}>
        My Education
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={classes.styleDiv}>
          <h3 className={classes.styleH3}>Min Utbildning</h3>
          <p className={classes.pStyle}>

            <text>

              <b>Utbildningen är en Yh-utbildning på 2 år och 400 Yh-poäng och innehållet är bland annat:</b> <br />
              <br />- Front- och backendutveckling(HTML5, CSS3, Javascript, JQuery, React, Vue, JSON och SQL) inklusive responsivitet <br />

              <br />- Systemutveckling - PHP, objekt- och funktionsorienterad programmering, testning, server miljö och serverteknik <br />

              <br />- E-handel - hur man organiserar en e-handel med dagens krav och utveckling mot någon av de vanligaste e-handelssystem <br />

              <br />-Systemstöd och tredjepartssystem med betal- och affärssystem samt logistik inom e-handel <br />

              <br />- LIA / Praktik på företag inom branschen, ungefär en tredjedel av studietiden. <br />

            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}