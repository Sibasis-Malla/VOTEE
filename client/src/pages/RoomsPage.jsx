import React,{useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, Stack } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { Add } from '@mui/icons-material';
import RoomCard from '../components/Cards/RoomsCard';
import Web3Context from '../context';
import useContract from '../context/useContract';

const RoomsPage = () => {
  const classes = useStyles();
  const {Contract} = useContext(Web3Context);
  const [rooms, setrooms] = useState([])

    const{Rooms} = useContract(Contract);

      useEffect( ()=>{
        async function get(){
        const res = await Rooms(Contract);
        setrooms(res)
        }
        get()
       
      },[Contract])
     


  return (
    <>
      <Stack direction="row" spacing={2} className={classes.header}>
        <Typography variant="h5" className={classes.text} component="div">
          Rooms
        </Typography>
        <Link style={{ textDecoration: 'none' }} to="/rooms/create">
          <Button variant="contained" startIcon={<Add />}>
            Create a Room
          </Button>
        </Link>
      </Stack>
      <div className={classes.container}>
      {
      Array.isArray(rooms) && rooms.map((data)=>{
        const {id,roomOwner,isActive} = data
        return (isActive&&<RoomCard id={id} roomOwner={roomOwner}/>)})}
        
      </div>
    </>
  );
};

export default RoomsPage;

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    rowGap: '20px',
    columnGap: '20px',
    margin: '30px 2%',
    marginBottom: '100px',
  },
}));
