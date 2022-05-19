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
        More About Me
      </button>
      <Modal
      className={classes.top}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <div className={'scroll'} id={'styleDiv'}>
          <h3 className={classes.styleH3}>Previous Occupations</h3>
          <p className={classes.pStyle}>

            <text>

              <b> TRUCK DRIVER • SEP 2016 - ONGOING </b>
              <br /> Permanently employed as a truck driver. The main task is to drive material to the track. <br />

              <br /> <b> TRUCK DRIVER • APR 2016 - SEP 2016 </b>
              <br /> Truck driver via recruitment company. <br />

              <br /> <b> RESTORATION ASSISTANT • JAN 2016 - MAR 2016 </b>
              <br /> Restaurant assistant, the main task was to stand at the checkout and keep order in the restaurant. <br />

              <br /> <b> VOLUNTEER WORKERS • THAILAND • OCT 2015 - DEC 2015 </b>
              <br /> Volunteer worker at Wildlife friends foundation with elephants. All care of elephants and the center <br />

              <br /> <b> CLEANER • JUN 2015 - OCT 2015 </b>
              <br /> Office cleaning, home cleaning and construction cleaning. <br />

              <br /> <b> Special competencies </b> <br />
              B driving license <br />
              Truck cards: A1-A4, B1-B4, D1 <br />

              <br /> <b> Feel free to contact me if you want to see my full CV. </b> <br />

              <br /> <b> Some examples of experiences: </b> <br />
              <br /> - The time as a restaurant assistant has made me have a greater sense of service and made me more stress-resistant. <br />
              <br /> - The time as a cleaner taught me to be accurate and effective at the same time. <br />
              <br /> - As a truck driver, I have learned to get better at planning and structuring my work. <br />
              <br /> - I am a former horse girl, so responsibility is something that has been with me since an early age. <br />
              <br /> - The period in Thailand I had to take care of, for me completely new animals. In addition, I got to take responsibility for leading new groups of people from all parts of the world. The volunteer trip taught me a lot about myself and perhaps above all that I managed more than I had thought. <br />

            </text>

          </p>
        </div>
      </Modal>
    </>
  )
}