import { useState } from "react";

const WriteContract = (instance, currentAccount) => {
  const [currentVoter, setCurrentVoter] = useState(null);
  const createRoom = async (instance,id,acc)=>{
    console.log(instance)
    await instance.methods.createRooms(id).send({from:acc});
    alert("Room Created Succesfully!")

  }
  const deleteRoom = async (id)=>{
    await instance.methods.deleteRoom(id).send({from:currentAccount});

  }

  const addVoter = async (address,id) => {
    setCurrentVoter(address);
    await instance.methods.addVoter(address,id).send({ from: currentAccount });
  };
  const removeVoter = async (address,id) => {
    setCurrentVoter(address);
    await instance.methods.deleteVoter(address,id).send({ from: currentAccount });
  };
  const addProposal = async (content,id) => {
    await instance.methods.addProposal(content,id).send({ from: currentAccount });
  };
  const removeProposal = async (content,id) => {
    await instance.methods.deleteProposal(content,id).send({ from: currentAccount });
  };
  const vote = async (id,roomId) => {
    await instance.methods.vote(id,roomId).send({ from: currentAccount });
  };
  const startProposalSession = async (id) => {
    await instance.methods.startProposalRegistration(id).send({ from: currentAccount });
  };
  const endProposalSession = async (id) => {
    await instance.methods.endProposalRegistration(id).send({ from: currentAccount });
  };
  const startVotingSession = async (id) => {
    await instance.methods.startVotingSession(id).send({ from: currentAccount });
  };
  const endVotingSession = async (id) => {
    await instance.methods.endVotingSession(id).send({ from: currentAccount });
  };
  const resetVotingSession = async (id) => {
    await instance.methods.resetVotingSession(id).send({ from: currentAccount });
  };

  return {
    
    currentVoter,
    createRoom,
    deleteRoom,
    addVoter,
    removeVoter,
    startProposalSession,
    endProposalSession,
    startVotingSession,
    endVotingSession,
    resetVotingSession,
    addProposal,
    removeProposal,
    vote,
  };
};
export default WriteContract;
