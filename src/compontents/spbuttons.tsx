import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function OutlinedButtons() {
    const classes = useStyles();

    return (

                <div style={btnDiv}>

                    <Link style={linkBtn} to="/omMig">
                        <Button style={buttons} variant="contained" color="primary" disableElevation>
                            Om Mig
                        </Button>
                    </Link>

                    <Link style={linkBtn} to="/tidigareYrken">
                        <Button style={buttons} variant="contained" color="primary" disableElevation>
                            Tidigare Yrken
                        </Button>
                    </Link>

                    <Link style={linkBtn} to="/kontakt">
                        <Button style={buttons} variant="contained" color="primary" disableElevation>
                            Kontakt
                        </Button>
                    </Link>

                    <div style={conDiv}>
                        <Link style={linkBtn} to="/skolprojekt">
                            <Button style={buttons} variant="contained" color="primary" disableElevation>
                                Projekt i skolan
                            </Button>
                        </Link>

                        <Link style={linkBtn} to="/fotografier">
                            <Button style={buttons} variant="contained" color="primary" disableElevation>
                                Fotogalleri
                            </Button> 
                        </Link>

                        <Link style={linkBtn} to="/fotografier">
                            <Button style={buttons} variant="contained" color="primary" disableElevation>:)</Button>
                        </Link>

                    </div>
                </div>
                
    );
}

const linkBtn: React.CSSProperties = {
    textDecoration: 'none',
}

const buttons: React.CSSProperties = {
    backgroundColor: '#395231',
    fontSize: '12px',
    margin: '2px'
}

const btnDiv: React.CSSProperties = {
    maxWidth: '375px',
    marginTop: '-1.5rem',
    padding: '0px'
}

const conDiv: React.CSSProperties = {
    maxWidth: '375px',
    justifyContent: 'center',
    alignItems: 'center'
}

/* const background: ThemedCSSProperties = (theme) => ({
    background: theme.background.secondary,
    color: theme.foreground.primary
  })
   */