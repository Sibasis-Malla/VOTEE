import React from 'react';

import { Button, Typography, Stack, TextField, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminPage = () => {
  const classes = useStyles();
  return (
    <Stack direction="column" spacing={2} className={classes.header}>
      <div>
        <Typography variant="h5" className={classes.text} component="div">
          Update Voting Status
        </Typography>
        <Stack direction="row" spacing={2} style={{ marginTop: '15px' }}>
          <Button variant="contained">Start Proposal Session</Button>
          <Button variant="contained">End Proposal Session</Button>
          <Button variant="contained">Start Voting Session</Button>
          <Button variant="contained">End Voting Session</Button>
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
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <Button variant="contained">Add</Button>
          </Stack>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary="0xb761D4c120bBaeFF305a863E9Ed402ce10da59BE" />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary="0xb761D4c120bBaeFF305a863E9Ed402ce10da59BE" />
            </ListItem>
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
