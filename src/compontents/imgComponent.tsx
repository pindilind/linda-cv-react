import React from "react";
import Katt1 from '../katt1.png';
import Hund1 from '../hund1.png';
import Hund2 from '../hund2.png';
import Hund3 from '../hund3.png';
import Häst1 from '../häst1.png';

export default function ImgComponent() {

    return (
        <div>
            <img style={picStyle} src={Katt1} alt="Selfie" />
            <img style={picStyle} src={Hund3} alt="Selfie" />
            <img style={picStyle} src={Hund1} alt="Selfie" />
            <img style={picStyle} src={Häst1} alt="Selfie" />
            <img style={picStyle} src={Hund2} alt="Selfie" />
            

        </div>
    );
}


const picStyle: React.CSSProperties = {
    objectFit: 'cover',
    maxWidth: '330px'

}