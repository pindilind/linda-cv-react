import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fotogalleri from '../fotogalleri.png';
import ImgComponent from './imgComponent'

export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>

            <Link style={linkBtn} to="/">
                <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <Card style={cardStyle}>
                <img style={selfieStyle} src={Fotogalleri} alt="Selfie" />

                <Link style={linkBtn} to="/omMig">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Om Mig
                    </Button> 
                </Link>
                
                <Link style={linkBtn} to="/tidigareYrken">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Tidigare Yrken
                    </Button>
                </Link>

                <Link style={linkBtn} to="/kontakt">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Kontakt
                    </Button>
                </Link>

                <Link style={linkBtn} to="/skolprojekt">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Projekt i skolan
                    </Button>
                </Link>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Jag vill gärna visa upp några av mina bilder jag tagit på djuren jag har/haft. Fotografering är något jag tycker är roligt, och gör
                            detta på en hobbynivå där jag tyvärr inte tagit mig tiden (ännu) att lära mig det olika inställningarna som finns.<br />
                            Personligen tycker jag att jag får till väldigt fina bilder, detta för att jag är mån om att det jag gör ska bli så bra som möjligt. <br />

                            <br /><b>NOTE: jag har endast fotograferat bilderna här nedan. Inte bilderna i mina headers</b> <br />

                            <br />
                        </text>
                    </Typography>
                    <ImgComponent />

                </CardContent>

            </Card>
        </div>
    );
}

const cardDiv: React.CSSProperties = {
    display: 'flex',
    marginTop: '1em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const cardStyle: React.CSSProperties = {
    width: '360px',
    marginBottom: '1rem'
}

const selfieStyle: React.CSSProperties = {
    objectFit: 'cover',
    maxWidth: '360px'
}


const btnStyle: React.CSSProperties = {
    fontSize: '9px',
    padding: '3px',
    backgroundColor: '#395231',
    margin: '5px',
    marginLeft: '0.8em'
}

const linkBtn: React.CSSProperties = {
    fontSize: '9px',
    textDecoration: 'none',
}