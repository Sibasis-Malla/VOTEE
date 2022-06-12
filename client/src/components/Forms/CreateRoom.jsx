import  React,{useContext} from 'react';
import {
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from '@mui/material';
import Web3Context from '../../context';
import useContract from '../../context/useContract';


export default function CreateRoom() {
  //const [Contract,setContract]=useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const {Contract,account} = useContext(Web3Context);



  //Promise.resolve(Contract)
 // console.log(Contract)

  //const {account,checkIfWalletIsConnected} = useContext(Web3Context);


  const{createRoom} = useContract(Contract,account.currentAccount);
  const randomNumber = Math.round(Math.random()*1000000);

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
          <div>
          Admin: {account.currentAccount}
          </div>
        <div>
        Room No: {randomNumber}
        </div>
        
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
             onClick={()=>createRoom(Contract,randomNumber,account.currentAccount)}
          >
            Create the Room
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
