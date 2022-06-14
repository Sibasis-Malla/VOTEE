/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Web3Context from '../../context';
import DeleteIcon from '@mui/icons-material/Delete';

const RoomCard = (props) => {
  const classes = useStyles();
  const [Currentaccount, setaccount] = useState('');
  const { account } = useContext(Web3Context);
  useEffect(() => {
    setaccount(account);
    //console.log(Currentaccount);
  }, [account]);

  return (
    <Card sx={{ maxWidth: 365 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/sambitsankalp/image/upload/v1654691507/hackathons/Simple-Minimalist-Background-Image_e8zmkn.jpg"
          alt="Cover Pic"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ mb: 0, mr: 1 }}
            component="div"
          >
            Room ID: {props.id}
          </Typography>
          {props.roomOwner === Currentaccount ? <DeleteIcon /> : ''}
          <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
            Created By: {props.roomOwner}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enter Room
        </Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;

const useStyles = makeStyles({
  button: {
    width: '100%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  },
});
