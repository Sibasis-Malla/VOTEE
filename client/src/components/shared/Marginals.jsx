import React from 'react';
import Navbar from '../marginals/Navbar';

import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StickyFooter from '../marginals/Footer';

const Marginals = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
      <footer className={classes.footer}>Made with ❤ by Team Invincible</footer>
      <StickyFooter />
    </>
  );
};

export default Marginals;

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '80px',
  },
  footer: {
    color: '#000',
    marginBottom: 0,
    bottom: 0,
    marginTop: '50px',
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: '20px',
  },
}));
