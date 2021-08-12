import React from "react";
import Katt1 from './assets/katt1.png';
import Hund1 from './assets/hund1.png';
import Hund2 from './assets/hund2.png';
import Hund3 from './assets/hund3.png';
import Häst1 from './assets/häst1.png';
import Katt2 from './assets/katt2.png';

export default function ImgComponent() {

    return (
        <div>
            <img style={picStyle} src={Katt1} alt="Selfie" />
            <img style={picStyle} src={Hund3} alt="Selfie" />
            <img style={picStyle} src={Hund1} alt="Selfie" />
            <img style={picStyle} src={Häst1} alt="Selfie" />
            <img style={picStyle} src={Hund2} alt="Selfie" />
            <img style={picStyle} src={Katt2} alt="Selfie" />

        </div>
    );
}


const picStyle: React.CSSProperties = {
    objectFit: 'cover',
    maxWidth: '330px'

}