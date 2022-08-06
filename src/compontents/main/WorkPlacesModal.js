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
      Arbetslivserfarenhet
      </button>
      <Modal
      className={classes.top}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={'scroll'} id={'styleDiv'}>
          <h3 className={classes.styleH3}>Arbetslivserfarenhet</h3>
          <p className={classes.pStyle}>

            <text>

              <b> TRUCKFÖRARE • SEP 2016 - PÅGÅENDE </b>
              <br /> Tillsvidareanställd som truckförare Huvuduppgiften är att köra material till banan. <br />

              <br /> <b> TRUCKFÖRARE • APR 2016 - SEP 2016 </b>
              <br /> Truckförare på ett rekryteringsföretag <br />

              <br /> <b> RESTURANGBITRÄDE • JAN 2016 - MAR 2016 </b>
              <br /> Restaurangbiträde, huvuduppgiften var att stå i kassan och hålla rent restaurangen <br />

              <br /> <b> VOLONTÄRARBETARE • OCT 2015 - DEC 2015 </b>
              <br /> Volontärarbetare på Wildlife Friends foundation med elefanter. All vård av elefanter och centrum <br />

              <br /> <b> LOKALVÅRDARE • JUNI 2015 - OKT 2015 </b>
              <br /> Kontorsstädning, hemstädning och byggstädning <br />

              <br /> <b> SELDÉN MAST AB • MONTÖR • APR 2014 - JUNI 2015 </b>
              <br /> Monterade mindre delar till master på båtar <br />

              <br /> <b> JENSENS BøFHUS A/S • SERVITRIS • FEB 2014 - APR 2014 </b>
              <br /> Servitörer arbetar med att ta emot beställningar och servera mat och dryck på restauranger <br />

              <br /> <b> SJÖFARTSCAFÉET • CAFÉBITRÄDE • APR 2013 - JAN 2014 </b>
              <br /> Cafébiträde, huvuduppgiften var att förbereda mat i köket men uppgifter som att hålla rent i caféet och ta emot kunder i kassan och baka <br />

              <br /> <b> ANDRA ERFARENHETER </b> <br />
              B-körkort <br />
              Truckkort: A1-A4, B1-B4, D1 <br /> <br />

              <b> PRAKTIKPLATS • VIA UTBILDNINGEN MEDIEINSTITUTET (LIA) </b> <br />
              - Volvo Cars, Fleet And Fulfillment (15 weeks) <br />
              - Maria Andersson (10 weeks) <br /> <br />

              <b> DATORKUNSKAPER </b> <br />
              - Grundkunskaper i Snowflake Wherehouse  <br />
              - SASS <br />
              - FIGMA <br />

              <br /> <b> Kontakta mig gärna för ett fullständigt CV </b> <br />

              <br /> <b> Några exempel på erfarenheter jag fått från tidigare yrken: </b> <br />
              – Tiden som restaurangbiträde/Cafébiträde har gjort att jag fått en större servicekänsla och gjort mig mer stresstålig. <br />
              <br /> – Tiden som städare lärde mig att vara korrekt och effektiv på samma gång. <br />
              <br /> – Som truckförare har jag lärt mig att bli bättre på att planera och strukturera mitt arbete. <br />
              <br /> – Jag är en före detta hästtjej, så ansvar är något som funnits med mig sedan tidig ålder. <br />
              <br /> – Perioden i Thailand fick jag ta hand om, för mig helt nya djur. Dessutom fick jag ta ansvar för att leda nya grupper av människor från alla delar av världen. Volontärresan lärde mig mycket om mig själv och kanske framför allt att jag klarade mer än jag hade trott. <br />

              {/* <br /> <b> Några exempel på erfarenheter jag fått från tidigare yrken: </b> <br />
              - The time as a restaurant assistant has made me have a greater sense of service and made me more stress-resistant. <br />
              <br /> - The time as a cleaner taught me to be accurate and effective at the same time. <br />
              <br /> - As a truck driver, I have learned to get better at planning and structuring my work. <br />
              <br /> - I am a former horse girl, so responsibility is something that has been with me since an early age. <br />
              <br /> - The period in Thailand I had to take care of, for me completely new animals. In addition, I got to take responsibility for leading new groups of people from all parts of the world. The volunteer trip taught me a lot about myself and perhaps above all that I managed more than I had thought. <br /> */}

            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}