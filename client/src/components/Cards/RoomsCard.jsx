import React from 'react';
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

const RoomCard = () => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/sambitsankalp/image/upload/v1654691507/hackathons/Simple-Minimalist-Background-Image_e8zmkn.jpg"
          alt="Cover Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ mb: 0 }} component="div">
            Room 1
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
            Created By: Sibasis Malla
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ultricies eu felis id condimentum.
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
