import { useState } from "react";

const WriteContract = (instance, currentAccount) => {
  const [currentVoter, setCurrentVoter] = useState(null);
  const createRoom = async (instance,id,acc)=>{
    console.log(instance)
    await instance.methods.createRooms(id).send({from:acc});
    alert("Room Created Succesfully!")

  }
  const deleteRoom = async (id) =>{
    await instance.methods.deleteRoom(id).send({from:currentAccount});

  }

  const addVoter = async (address,instance,id,currentAccount) => {
    setCurrentVoter(address);
    await instance.methods.addVoter(address,id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const removeVoter = async (instance,address,id,currentAccount) => {
    setCurrentVoter(address);
    await instance.methods.deleteVoter(address,id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const addProposal = async (content,instance,id,currentAccount) => {
    await instance.methods.addProposal(content,id).send({ from: currentAccount });
  };
  const removeProposal = async (content,instance,id,currentAccount) => {
    await instance.methods.deleteProposal(content,id).send({ from: currentAccount });
  };
  const vote = async (instance,id,roomId,currentAccount) => {
    await instance.methods.vote(id,roomId).send({ from: currentAccount });
  };
  const startProposalSession = async (instance,id,currentAccount) => {
    await instance.methods.startProposalRegistration(id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const endProposalSession = async (instance,id,currentAccount ) => {
    await instance.methods.endProposalRegistration(id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const startVotingSession = async (instance,id,currentAccount) => {
    await instance.methods.startVotingSession(id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const endVotingSession = async (instance,id,currentAccount) => {
    await instance.methods.endVotingSession(id).send({ from: currentAccount });
    window.location.reload(false)
  };
  const resetVotingSession = async (instance,id,currentAccount) => {
    await instance.methods.resetVotingSession(id).send({ from: currentAccount });
    window.location.reload(false)
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
