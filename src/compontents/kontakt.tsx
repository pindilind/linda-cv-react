import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Selfie from '../PICC.jpg'


export default function ImgMediaCard() {


    return (
        <div style={cardDiv}>
            <Card style={cardStyle}>
                <CardActionArea>
                    <img style={selfieStyle} src={Selfie} alt="Selfie" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Kontakt
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          TEXT HÄR
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        StartSida
                    </Button>
                    <Button size="small" color="primary">
                        Tidigare Yrken
                    </Button>
                    <Button size="small" color="primary">
                        Kontakt
                    </Button>
                </CardActions>
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

}

const selfieStyle: React.CSSProperties = {
    objectFit: 'cover',
    maxWidth: '360px'
}