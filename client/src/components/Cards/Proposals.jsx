/* eslint-disable */
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

const Proposals = (props) => {
  const classes = useStyles();
  const { contract, account, vote, room, count, status } = props;

  return (
    <Card sx={{ maxWidth: 365 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontSize: 24 }}
            variant="h6"
            component="div"
          >
            Proposal {props.id}
          </Typography>
          {status == 4 && (
            <Typography gutterBottom variant="h6">
              Final Votes: {count}
            </Typography>
          )}
          <Typography variant="body2">Proposal By: {props.owner}</Typography>
          <Typography variant="body2" sx={{ mt: 3 }} color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => vote(contract, props.id, room, account.currentAccount)}
        >
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
