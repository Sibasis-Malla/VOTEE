import React, { useState, useContext } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Web3Context from '../../context';
import useContract from '../../context/useContract';
export default function CreateProposal() {
  const [content, setContent] = useState('');
  const { room } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleProposalForm = (e) => {
    setContent(() => ([e.target.content] = e.target.value));
  };

  const { Contract, account } = useContext(Web3Context);
  const { addProposal } = useContract(Contract, account);

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
          Create Proposal
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            multiline
            minRows={5}
            content="content"
            label="Description"
            id="content"
            autoComplete="content"
            onChange={handleProposalForm}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() =>
              addProposal(content, Contract, room, account.currentAccount)
            }
          >
            Create a Proposal
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
