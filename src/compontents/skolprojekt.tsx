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
import Skolprojekt from '../skolprojekt.png'
import Blomsterslanten from '../blomsterslanten.png'

export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>

            <Link style={linkBtn} to="/">
                <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <Card style={cardStyle}>
                <img style={selfieStyle} src={Skolprojekt} alt="Selfie" />

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

                <Link style={linkBtn} to="/fotografier">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Fotogalleri
                    </Button>
                </Link>

                <CardContent>

                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            TEXT
                        </text>
                    </Typography>



                    {/* <img style={selfieStyle} src={Ty} alt="Selfie" /> */}
                    <Typography gutterBottom variant="h5" component="h2">
                        Startpage-Netflix
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Ett försök att efterlikna Netflix startsida.<br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </text>
                    </Typography>

                    {/* <img style={selfieStyle} src={Ty} alt="Selfie" /> */}
                    <Typography gutterBottom variant="h5" component="h2">
                        Horoscope
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Skriv in ditt datum för att se vilket horoskop du är.<br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </text>
                    </Typography>

                    {/* <img style={selfieStyle} src={Ty} alt="Selfie" /> */}
                    <Typography gutterBottom variant="h5" component="h2">
                        FAB Friluft
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Ett projekt tillsammans med några i klassen. E-handel med friluftskläder.<br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </text>
                    </Typography>

                    {/* <img style={selfieStyle} src={Ty} alt="Selfie" /> */}
                    <Typography gutterBottom variant="h5" component="h2">
                        Quiz-App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Ett projekt tillsammans med några i klassen. <br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </text>
                    </Typography>

                    <img style={selfieStyle} src={Blomsterslanten} alt="Selfie" /> 
                    <Typography gutterBottom variant="h5" component="h2">
                        BlomsterSLANTen
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Ett projekt tillsammans med några i klassen. <br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </text>
                    </Typography>

                    {/* <img style={selfieStyle} src={Ty} alt="Selfie" /> */}
                    <Typography gutterBottom variant="h5" component="h2">
                        React Quiz
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Ett projekt tillsammans med några i klassen.<br />

                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
    maxWidth: '330px'
}

const btnStyle: React.CSSProperties = {
    fontSize: '9px',
    padding: '3px',
    backgroundColor: '#395231',
    margin: '5px',
    marginLeft: '1.4em'

}

const linkBtn: React.CSSProperties = {
    fontSize: '9px',
    textDecoration: 'none',
}