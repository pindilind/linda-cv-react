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
    fontSize: '0.5',
    '@media (max-width: 480px)': {
      fontSize: '0.5'
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
      WORKING EXPERIENCE
      </button>
      <Modal
      className={classes.top}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={'scroll'} id={'styleDiv'}>
          <h3 className={classes.styleH3}>WORKING EXPERIENCE</h3>
          <p className={classes.pStyle}>

            <text>

              <b> VOLVO CARS AB • FORKLIFT DRIVER • SEP 2016 - ONGOING</b>
              <br /> Permanently employed as a forklift driver The main task is to drive material to the track. <br />

              <br /> <b> LERNIA • FORKLIFT DRIVER • APR 2016 - SEP 2016 </b>
              <br /> Forklift driver at a recruitment company <br />

              <br /> <b> BURGER KING • RESTAURANT ASSISTANT • JAN 2016 - MAR 2016 </b>
              <br /> Restaurant assistant, the main task was to stand at the cash register and keep the restaurant clean <br />

              <br /> <b> WILDLIFE FRIENDS FOUNDATION • VOLONTEER WORKER • OCT 2015 - DEC 2015 </b>
              <br /> Volunteer worker with elephants. All care of elephants and center <br />

              <br /> <b> FIXER • CLEANER • JUN 2015 - OCT 2015 </b>
              <br /> Office cleaning, home cleaning and construction cleaning <br />

              <br /> <b> SELDÉN MAST AB • ASSEMLBER • APR 2014 - JUN 2015 </b>
              <br /> Assembled smaller parts to masts on boats <br />

              <br /> <b> JENSENS BøFHUS A/S • WAITRESS • FEB 2014 - APR 2014 </b>
              <br /> Waiters work by taking orders and serving food and drinks in restaurants <br />

              <br /> <b> SJÖFARTSCAFÉET • WAITRESS • APR 2013 - JAN 2014 </b>
              <br /> The main task was to prepare food in the kitchen, but tasks such as keeping the cafe clean and receiving customers at the till and baking <br />

              <br /> <b> OTHER EXPERIENC </b> <br />
              B-Driving licens <br />
              Forklift: A1-A4, B1-B4, D1 <br /> <br />

              <b> INTERNSHIP PLACE •EDUCATION MEDIEINSTITUTET (LIA) </b> <br />
              - Volvo Cars, Fleet And Fulfillment (15 weeks) <br />
              - Maria Andersson (10 weeks) <br /> <br />

              <b> COMPUTER SKILLS </b> <br />
              - Basic knowledge in Snowflake Wherehouse  <br />
              - SASS <br />
              - FIGMA <br />

              <br /> <b> Please contact me for a full CV </b> <br />

              <br /> <b> Some examples of experiences I gained from previous professions: </b> <br />
              - The time as a restaurant assistant/Cafe assistant has given me a greater sense of service and made me more stress-resistant. <br />
              <br /> – The time as a cleaner taught me to be accurate and efficient at the same time. <br />
              <br /> – As a forklift driver, I have learned to become better at planning and structuring my work. <br />
              <br /> – I am a former horse girl, so responsibility is something that has been with me since an early age. <br />
              <br /> – During the period in Thailand, I had to take care of completely new animals for me. In addition, I had to take responsibility for leading new groups of people from all parts of the world. The volunteer trip taught me a lot about myself and perhaps above all that I could handle more than I had thought. <br />

            
            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}