import React from 'react';
import SpButtons from './spbuttons';

/* import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext'; */


export default function StartPage() {
    return (
                <div style={parentDiv}>
                    <div style={messegeStyle}><p>Sidan är under uppbyggnad :) </p></div>
                    <div style={pStyle}><p>söker prakikplats!</p></div>
                    <div style={StartPageStyle}>
                        <p style={hStyle}>LINDA GUSTAFSSON</p>
                        <SpButtons />
                      
                    </div>
                </div>
    )
}

const StartPageStyle: React.CSSProperties = {
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
const parentDiv: React.CSSProperties = {
    display: 'flex',
    marginTop: '9em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const hStyle: React.CSSProperties = {
    fontFamily: 'Montserrat',
    fontSize: '33px',
    color: 'white',
    marginTop: '-3.7rem'
}

const pStyle: React.CSSProperties = {
    fontFamily: 'Dawning of a New Day',
    fontSize: '40px',
    color: '#395231',
}

const messegeStyle: React.CSSProperties = {
    fontFamily: 'Dawning of a New Day',
    fontSize: '40px',
    color: '#395231',
    marginBottom: '-40px',
    marginTop: '-130px'
}

/* const background: ThemedCSSProperties = (theme) => ({
    background: theme.background.secondary,
    color: theme.foreground.primary
})

 */