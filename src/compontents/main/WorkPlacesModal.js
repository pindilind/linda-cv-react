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
  }
});

export default function WorkplacesModal() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);


  return (

    <>
      <button className="button1" onClick={handleOpen}>
        Mer om mig
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={classes.styleDiv}>
      <h3 className={classes.styleH3}>Tidigare Yrken</h3>
      <p className={classes.pStyle}>

        <text>

          <b>TRUCKFÖRARE • SEP 2016 - PÅGÅENDE</b>
          <br />Tillsvidare anställd som truckförare. Huvudsakliga uppgift är att köra material till banan.<br />

          <br /><b>TRUCKFÖRARE • APR 2016 - SEP 2016</b>
          <br />Truckförare via rekryteringsfirma.<br />

          <br /><b>RESTURANGBITRÄDE • JAN 2016 - MAR 2016</b>
          <br />Restaurangbiträde, huvudsakliga uppgiften var att stå i kassan och hålla ordning i restaurangen.<br />

          <br /><b>VOLONTÄRARBETARE • THAILAND • OKT 2015 - DEC 2015</b>
          <br />Volontärarbetare på Wildlife friends foundation med elefanter. All skötsel av elefanter och centret<br />

          <br /><b>LOKSLVÅRDARE • JUN 2015 - OKT 2015</b>
          <br />Kontorstäd, hemstäd och byggstäd. <br />

          <br /><b>Specialkompetenser</b><br />
          B körkort<br />
          Truckkort: A1-A4, B1-B4, D1  <br />

          <br /><b>Hör gärna av dig om du vill se mitt fullständiga CV.</b><br />

          <br /><b>Några exempel på erfarenheter:</b><br />
          <br />- Tiden restaurangbiträde har gjort att jag har fått större känsla för service och gjort mig mer stresstålig.<br />
          <br />- Tiden som lokalvårdare lärde mig att vara noggrann och samtidigt effektiv. <br />
          <br />-  Som truckförare har jag lärt mig att bli bättre på planering och att strukturera mitt arbete.<br />
          <br />-  Jag är en före detta hästtjej, så ansvar är något som varit med mig sedan tidig ålder.<br />
          <br />-  Perioden i Thailand fick jag sköta om, för mig helt nya djur. Dessutom jag fick ta ansvar för att leda nya grupper människor från alla delar av världen. Volontärresan lärde mig mycket om mig själv och kanske framförallt att jag klarade mer än vad jag hade trott.<br />

        </text>

      </p>
    </div>
      </Modal>
    </>
  )
}