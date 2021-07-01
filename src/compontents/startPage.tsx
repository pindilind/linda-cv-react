

import React from 'react';
import SpButtons from './spbuttons';



export default function StartPage() {
    return (
        <div style={parentDiv}>
        <div style={StartPageStyle}>
            <p style={hStyle}>LINDA GUSTAFSSON</p>
            {/* <p>skapad av mig Linda Gustafsson</p> */}
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
    marginTop: '11em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}



const hStyle: React.CSSProperties = {
    fontFamily: 'Montserrat',
    fontSize: '30px',
    color: 'white'
}