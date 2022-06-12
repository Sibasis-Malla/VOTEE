import { useState } from "react";

const ReadContract = (instance) => {
  const [count, setCount] = useState(0);

  const countVoters = (id) => {
    if (!instance) {
      return null;
    }
    instance.methods.RoomList(id).votersCount().call().then(setCount);
  };
  const Rooms= async(instance)=>{
    //console.log(instance)
    if(!instance) {
      return null;
    }
    const rooms = await instance.methods.TotalRooms().call();
    return await Promise.all(
      rooms.map(async (roomId) => {
        const {
          id,
          isActive,
          roomOwner
        } = await instance.methods.RoomList(roomId).call();

        return {
          id:id,
          isActive:isActive,
          roomOwner:roomOwner
        };
      })
    ).then((values) => values.filter((value) => value.isActive));

  }

  const RoomwhiteList = async (instance,roomId) => {
    if (!instance) {
      return false;
    }
    
    const Voters = await instance.methods.getVoters(roomId).call();
    //const res = await instance.methods.RoomList(roomId).call();
    //console.log(res.voters)
    return await Promise.all(
     
      Voters.map(async (address) => {
        const {
          
          isRegistered,
          _address,
          hasVoted,
        } = await instance.methods.getWhiteList(roomId,address).call();
        //console.log(_address)

        return {
          address: _address,
          isWhitelisted: isRegistered,
          hasVoted: hasVoted,
        };
      })
    ).then((values) => values.filter((value) => value.isWhitelisted));
  };

  const getProposals = async (instance,roomId) => {
    if (!instance) {
      return false;
    }
    let roomProposals = [];
    const proposalCount = await instance.methods.RoomList(roomId).proposalIds().call();
    return new Promise(async (resolve) => {
      for (let i = 0; i <= proposalCount; i++) {
        const proposal = await instance.methods.RoomList(roomId).proposals(i).call();
        if (!!proposal.description.length) {
          roomProposals.push(proposal);
        }
      }
      resolve(roomProposals);
    }).then((values) => values);
  };

  const getWinningProposal = async (instance,roomId) => {
    const proposals = await getProposals(instance,roomId);
    proposals.sort((a,b) => b.voteCount - a.voteCount)
    return proposals[0];
  }
  const getCurrentStatus = async(instance,roomId)=>{
    if (!instance) {
      return false;
    }
    const {status} = await instance.methods.RoomList(roomId).call()
    return status;
  }
  const getVoters = async(instance,roomId)=>{
    if (!instance) {
      return false;
     
    }
    const res = await instance.methods.getVoters(roomId).call()
    //console.log(res)
    return res;
  }

  return {
    count,
    Rooms,
    RoomwhiteList,
    getProposals,
    countVoters,
    getWinningProposal,
    getCurrentStatus,
    getVoters
  };
};
export default ReadContract;
