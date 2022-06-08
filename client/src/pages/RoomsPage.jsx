import React from 'react';

import { Button, Typography, Stack } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Add } from '@mui/icons-material';
import RoomCard from '../components/Cards/RoomsCard';

const RoomsPage = () => {
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" spacing={2} className={classes.header}>
        <Typography variant="h5" className={classes.text} component="div">
          Rooms
        </Typography>
        <Button variant="contained" startIcon={<Add />}>
          Create a Room
        </Button>
      </Stack>
      <div className={classes.container}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </>
  );
};

export default RoomsPage;

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '150px',
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
  },
}));
