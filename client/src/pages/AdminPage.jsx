import React, { useState, useEffect } from 'react';

import { Button, Typography, Stack, TextField, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Web3Context from '../context';
import useContract from '../context/useContract';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const AdminPage = () => {
  const classes = useStyles();
  const { room } = useParams();
  const [status, setstatus] = useState(4);
  const { Contract, account } = useContext(Web3Context);
  const [voter, setVoter] = useState('');
  const [voters, setvoters] = useState([]);
  const handleVoterForm = (e) => {
    setVoter(() => ([e.target.name] = e.target.value));
  };
  const {
    addVoter,
    removeVoter,
    startProposalSession,
    endProposalSession,
    startVotingSession,
    endVotingSession,
    RoomwhiteList,
    getCurrentStatus,
  } = useContract(Contract);
  //console.log(Contract);
  const res = getCurrentStatus(Contract, room);
  const statusArr = [
    'Registering Voters',
    'Proposals Registration Started',
    'Proposals Registration Ended',
    'Voting Session Started',
    'Voting Session Ended',
  ];
  res.then((val) => setstatus(val));

  useEffect(() => {
    async function get() {
      const res = await RoomwhiteList(Contract, room);
      setvoters(res);
    }
    get();
  }, [Contract, RoomwhiteList, room]);
  //console.log(voters)

  return (
    <Stack direction="column" spacing={2} className={classes.header}>
      <div>
        <Typography variant="h6" component="div">
          Current Room Status: {statusArr[status]}
        </Typography>
        <Typography
          variant="h5"
          sx={{ mt: 5 }}
          className={classes.text}
          component="div"
        >
          Update Voting Status
        </Typography>
        <Stack direction="row" spacing={2} style={{ marginTop: '15px' }}>
          <Button
            variant="contained"
            onClick={() =>
              startProposalSession(Contract, room, account.currentAccount)
            }
          >
            Start Proposal Session
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              endProposalSession(Contract, room, account.currentAccount)
            }
          >
            End Proposal Session
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              startVotingSession(Contract, room, account.currentAccount)
            }
          >
            Start Voting Session
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              endVotingSession(Contract, room, account.currentAccount)
            }
          >
            End Voting Session
          </Button>
        </Stack>
      </div>
      <div style={{ marginTop: '50px', width: '100%' }}>
        <Typography variant="h5" className={classes.text} component="div">
          Add Voters
        </Typography>
        <Stack
          direction="column"
          spacing={2}
          style={{ marginTop: '15px', width: '100%' }}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              required
              fullWidth
              id="voter"
              label="voter"
              name="voter"
              autoComplete="voter"
              autoFocus
              onChange={handleVoterForm}
            />
            <Button
              variant="contained"
              onClick={() =>
                addVoter(voter, Contract, room, account.currentAccount)
              }
            >
              Add
            </Button>
          </Stack>
          <List>
            {Array.isArray(voters) &&
              voters.map((data) => {
                const { address } = data;
                return (
                  <div key={address}>
                    <ListItem 
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() =>
                            removeVoter(
                              Contract,
                              address,
                              room,
                              account.currentAccount
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={address} />
                    </ListItem>
                    <Divider />
                    </div>
                );
              })}
          </List>
        </Stack>
      </div>
    </Stack>
  );
};

export default AdminPage;

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  voteTitle: {
    width: '100%',
    marginTop: '100px',
  },
}));
