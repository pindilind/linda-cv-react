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
import Kontakt from '../kontakt.png';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';




export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>

            <Link style={linkBtn} to="/">
                <Button style={btnStyle} variant="contained" color="primary" disableElevation>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <Card style={cardStyle}>

                <img style={selfieStyle} src={Kontakt} alt="Selfie" />

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
                        <div style={textDiv}>
                            <div><PhoneIcon style={icStyle} /> 0769-498623</div>
                            <div><EmailIcon style={icStyle} /> linda.gustafsson@outlook.com</div>
                        </div>

                        <div style={iconDiv}>
                            <div>
                                <a target="_blank" href="https://github.com/pindilind"><GitHubIcon style={linkStyle} /></a>
                            </div>

                            <div>
                                <a target="_blank" href="https://www.linkedin.com/in/linda-gustafsson-234aa9212/"><LinkedInIcon style={linkStyle} /></a>

                            </div>

                        </div>
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

const textDiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
}

const iconDiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '2rem'
}

const icStyle: React.CSSProperties = {
    fontSize: '20px'
}

const linkStyle: React.CSSProperties = {
    color: 'yellow',
    fontSize: '30px'
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