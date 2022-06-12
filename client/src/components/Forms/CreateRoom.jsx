import React, { useContext } from 'react';
import {
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
  TextField,
} from '@mui/material';
// import { styled } from '@mui/material/styles';
import Web3Context from '../../context';
import useContract from '../../context/useContract';

// const Input = styled('input')({
//   display: 'none',
// });

export default function CreateRoom() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const randomNumber = Math.round(Math.random() * 1000000);
  const { Contract, account } = useContext(Web3Context);
  // const [room, setRoom] = useState(randomNumber);
  // const [creator, setCreator] = useState(account.currentAccount);

  //Promise.resolve(Contract)
  // console.log(Contract)

  //const {account,checkIfWalletIsConnected} = useContext(Web3Context);

  const { createRoom } = useContract(Contract, account);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Create Room
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            defaultValue={account.currentAccount}
            name="creator"
            label="Creator"
            id="creator"
            autoComplete="creator"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            defaultValue={randomNumber}
            name="room"
            label="Room Number"
            id="room"
            autoComplete="room"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            minRows={5}
            name="description"
            label="Description"
            id="description"
            autoComplete="description"
          />
          {/* <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() =>
              createRoom(Contract, randomNumber, account.currentAccount)
            }
          >
            Create the Room
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
