import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add } from "@mui/icons-material";
import Proposals from "../components/Cards/Proposals";
import Web3Context from "../context";
import useContract from "../context/useContract";

const ProposalPage = () => {
  const classes = useStyles();
  let { room } = useParams();
  const [proposals, setProposals] = useState([]);
  const [status, setstatus] = useState(0);

  //console.log(room);
  const { Contract, account } = useContext(Web3Context);
  const { getProposals, getCurrentStatus, vote } = useContract(
    Contract,
    account
  );
  useEffect(() => {
    async function get() {
      const res = await getProposals(Contract, room);
      setProposals(res);
    }
    get();
  }, [Contract]);

  const res = getCurrentStatus(Contract, room);

  const statusArr = [
    "Registering Voters",
    "Proposals Registration Started",
    "Proposals Registration Ended",
    "Voting Session Started",
    "Voting Session Ended",
  ];
  res.then((val) => setstatus(val));

  return (
    <>
      <Stack direction="row" spacing={2} className={classes.header}>
        <Typography variant="h5" className={classes.text} component="div">
          Proposals
        </Typography>
        <Typography variant="h5" className={classes.text} component="div">
          Room : {room}
        </Typography>
        
        <Typography variant="h8" className={classes.text} component="div">
          Current Room Status: {statusArr[status]}
        </Typography>
        <Link
          style={{ textDecoration: "none" }}
          to={`/${room}/proposals/create`}
        >
          <Button variant="contained" startIcon={<Add />}>
            Create a Proposal
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/${room}/admin`}>
          <Button variant="contained">Admin</Button>
        </Link>
      </Stack>
      <div className={classes.container}>
        {Array.isArray(proposals) &&
          proposals.map((data) => {
            const { description, owner, id,voteCount } = data;
            return (
              <Proposals
                description={description}
                owner={owner}
                id={id}
                contract={Contract}
                account={account}
                vote = {vote}
                room = {room}
                count ={voteCount}
                status = {status}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProposalPage;

const useStyles = makeStyles(() => ({
  header: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    rowGap: "20px",
    columnGap: "20px",
    margin: "30px 2%",
    marginBottom: "100px",
  },
}));
