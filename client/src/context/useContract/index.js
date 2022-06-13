import { useMemo } from 'react';
import WriteContract from './writeContract';
import ReadContract from './readContract';

const useContract = (instance, admin) => {
  const {
    state,
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
  } = WriteContract(instance, admin);

  const {
    count,
    Rooms,
    getRoomOwner,
    RoomwhiteList,
    getProposals,
    getWinningProposal,
    getCurrentStatus,
    getVoters,
  } = ReadContract(instance);

  return useMemo(() => {
    return {
      getRoomOwner,
      count,
      currentVoter,
      Rooms,
      RoomwhiteList,
      getProposals,
      getWinningProposal,
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
      getCurrentStatus,
      vote,
      getVoters,
    };
  }, [
    count,
    currentVoter,
    state,
  ]);
};
export default useContract;
