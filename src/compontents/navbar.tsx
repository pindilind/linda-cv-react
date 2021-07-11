import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CustomizedSwitches from './toggle';
import { ThemedCSSProperties, ThemeContext } from './contexts/themeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (

    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={classes.root}>
          <AppBar style={background(theme)} position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
              <CustomizedSwitches />
                <p style={titleStyle}>linda gustafsson</p>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

      )}
    </ThemeContext.Consumer>
  );
}

const titleStyle: React.CSSProperties = {
  fontFamily: 'Pacifico',
  fontSize: '17px'
}

const background: ThemedCSSProperties = (theme) => ({
  background: theme.background.secondary,
  color: theme.foreground.primary
})
