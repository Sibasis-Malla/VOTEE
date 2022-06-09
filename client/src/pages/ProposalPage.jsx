import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, Stack } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Add } from '@mui/icons-material';
import Proposals from '../components/Cards/Proposals';

const ProposalPage = () => {
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" spacing={2} className={classes.header}>
        <Typography variant="h5" className={classes.text} component="div">
          Proposals
        </Typography>
        <Link style={{ textDecoration: 'none' }} to="/proposals/create">
          <Button variant="contained" startIcon={<Add />}>
            Create a Proposal
          </Button>
        </Link>
      </Stack>
      <div className={classes.container}>
        <Proposals />
        <Proposals />
        <Proposals />
        <Proposals />
        <Proposals />
      </div>
    </>
  );
};

export default ProposalPage;

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    rowGap: '20px',
    columnGap: '20px',
    margin: '30px 2%',
    marginBottom: '100px',
  },
}));