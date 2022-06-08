import React from 'react';

import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/" className={classes.logoContainer}>
        <Typography variant="h4" component="h4" className={classes.logo}>
          Votee
        </Typography>
      </Link>
      <div className={classes.tabsContainer}>
        <Link className={classes.tabLink} to="/rooms">
          <Typography className={classes.tab} variant="body1">
            Rooms
          </Typography>
        </Link>
        <Link className={classes.tabLink} to="/rooms">
          <Button
            variant="contained"
            className={classes.tab}
            startIcon={<Add />}
          >
            Connect to Wallet
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '70px',
    position: 'fixed',
    top: 0,
    backgroundColor: '#1A1A1A',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  logoContainer: {
    textDecoration: 'none',
    marginLeft: '10%',
  },
  logo: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10%',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tabLink: {
    margin: 0,
    textDecoration: 'none',
    padding: 'auto 15px',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tab: {
    color: '#fff',
    fontFamily: 'Helvetica',
  },
}));
