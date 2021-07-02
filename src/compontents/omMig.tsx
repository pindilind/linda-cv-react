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
import Selfie from '../PICC.jpg';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import SpButtons from './spbuttons';

export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>

            <Link style={linkBtn} to="/">
                <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <Card style={cardStyle}>
                <img style={selfieStyle} src={Selfie} alt="Selfie" />

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

                <Link style={linkBtn} to="/fotografier">
                    <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                        Fotogalleri
                    </Button>
                </Link>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <text>
                            Att fundera kring vad man vill göra när man blir stor kan ibland vara en utmaning. Men år 2020 valde jag att söka till <b>Medieinstitutet</b> i Göteborg. Valet av min utbildning Webbutvecklare inom E-handel grundar sig i att jag som liten haft intresse för enklare utveckling men också att vara kreativ. <br />

                            <br />Intresset föddes när det blev populärt att börja blogga. Min passion låg inte i att skriva saker på bloggen, utan jag upptäckte att man kunde utveckla sidan med kod vilket jag gjorde oftare än att skriva något. Så här här jag idag, snart pluggat mitt första år på Medieinstitutet.<br />

                            <br />Förutom mitt intresse för utveckling. Så tycker jag om att fotografera, redigera bilder och inredning men också tillbringa tid tillsammans med sambon och hunden i skogen. Tillsammans har vi nu köpt hus, vilket känns stort. Det kommer bli en del renovering och trädgårsdarbete framöver vilket jag också tycker är kul.<br />
                            <br />

                            <Typography gutterBottom variant="h5" component="h2">
                                Min Utbildning
                            </Typography>
                            <b>Utbildningen är en Yh-utbildning på 2 år och 400 Yh-poäng och innehållet är bland annat:</b> <br />
                            <br />- Front- och backendutveckling(HTML5, CSS3, Javascript, JQuery, React, Vue, JSON och SQL) inklusive responsivitet <br />

                            <br />- Systemutveckling - PHP, objekt- och funktionsorienterad programmering, testning, server miljö och serverteknik <br />

                            <br />- E-handel - hur man organiserar en e-handel med dagens krav och utveckling mot någon av de vanligaste e-handelssystem <br />

                            <br />-Systemstöd och tredjepartssystem med betal- och affärssystem samt logistik inom e-handel <br />

                            <br />- LIA / Praktik på företag inom branschen, ungefär en tredjedel av studietiden. <br />


                        </text>
                    </Typography>
                </CardContent>

            </Card>
        </div >
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
    margin: '5px'

}

const linkBtn: React.CSSProperties = {
    fontSize: '9px',
    textDecoration: 'none',
}