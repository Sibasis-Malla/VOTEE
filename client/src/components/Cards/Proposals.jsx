import React from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const Proposals = () => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Proposal 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ultricies eu felis id condimentum. Donec eget ipsum at magna
            vulputate mattis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" variant="contained" color="primary" className={classes.button}>
          Vote
        </Button>
      </CardActions>
    </Card>
  );
};

export default Proposals;

const useStyles = makeStyles({
  button: {
    width: '100%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  },
});
