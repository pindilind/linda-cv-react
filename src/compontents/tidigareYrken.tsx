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
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Ty from '../ty.png'


export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>

            <Link style={linkBtn} to="/">
                <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <Card style={cardStyle}>
                <img style={selfieStyle} src={Ty} alt="Selfie" />

                <Link style={linkBtn} to="/omMig">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Om Mig
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

                <Link style={linkBtn} to="/fotografier">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Fotogalleri
                    </Button>
                </Link>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>

                            <b>LOKSLVÅRDARE • JUN 2015 - OKT 2015</b>
                            <br />Kontorstäd, hemstäd och byggstäd. <br />

                            <br /><b>VOLONTÄRARBETARE • THAILAND • OKT 2015 - DEC 2015</b>
                            <br />Volontärarbetare på Wildlife friends foundation med elefanter. All skötsel av elefanter och centret<br />

                            <br /><b>RESTURANGBITRÄDE • JAN 2016 - MAR 2016</b>
                            <br />Restaurangbiträde, huvudsakliga uppgiften var att stå i kassan och hålla ordning i restaurangen.<br />

                            <br /><b>TRUCKFÖRARE • APR 2016 - SEP 2016</b>
                            <br />Truckförare via rekryteringsfirma.<br />

                            <br /><b>TRUCKFÖRARE • SEP 2016 - PÅGÅENDE</b>
                            <br />Tillsvidare anställd som truckförare. Huvudsakliga uppgift är att köra material till banan.<br />

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
                    </Typography>
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
    marginLeft: '1em'
}

const linkBtn: React.CSSProperties = {
    fontSize: '9px',
    textDecoration: 'none',
}