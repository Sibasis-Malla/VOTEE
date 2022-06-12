  
///SPDX-License-Identifier: GPL-3.0
pragma solidity  ^ 0.6.0 ;
pragma experimental ABIEncoderV2;

contract  Voting  {
    
    //Voter Struct
    struct Voter {
        bool isRegistered;
        address _address;
        bool hasVoted;
        uint256 votedProposalId;

    }
    //Proposal Struct
    struct Proposal {
        uint8 id;
        address owner;
        string description;
        uint256 voteCount;
    }

    enum WorkflowStatus {
        RegisteringVoters,
        ProposalsRegistrationStarted,
        ProposalsRegistrationEnded,
        VotingSessionStarted,
        VotingSessionEnded,
        VotesTallied
    }

    event NewVotingSystem ();
    event VoterRegistered ( address  voterAddress );
    event VoterRemoved ( address  _address );
    event ProposalsRegistrationStarted ();
    event ProposalsRegistrationEnded ();
    event ProposalRegistered ( uint256  proposalId );
    event ProposalRemoved ( uint256  proposalId );
    event VotingSessionStarted ();
    event VotingSessionEnded ();
    event Voted ( address  voter , uint256  proposalId );
    event VotesTallied ( uint8 _winningProposals  ) ;
    event WorkflowStatusChange (
        WorkflowStatus previousStatus,
        WorkflowStatus newStatus
    );

    //Room Structure


    struct Room{
        uint256 id;
        bool isActive;
        address roomOwner;
        address [] voters;
        WorkflowStatus  status;
        mapping (address => Voter)  whiteList;
        mapping (uint256  => Proposal) proposals;
        uint8   proposalIds;
        uint8   votersCount;
        uint8   winningProposalId;

    }
    
     
        mapping(uint256 => Room) public RoomList;
        uint256[]  totalRooms;    
    
      function TotalRooms () public  view  returns ( uint256 [] memory) {
        return totalRooms;
    }

    function getVoters (uint256 roomId) public  view  returns ( address [] memory ) {
        return RoomList[roomId].voters;
    }
    function getWhiteList (uint256 roomId,address _add) public  view  returns ( Voter memory ) {
        return RoomList[roomId].whiteList[_add];
    }
     function getProposals (uint256 roomId,uint256 ind) public  view  returns ( Proposal memory ) {
        return RoomList[roomId].proposals[ind];
    }

    function getWinningProposal (uint256 roomId) public  view  returns (Proposal memory  proposal ){

        return RoomList[roomId].proposals[RoomList[roomId].winningProposalId];
    }
    //Create Rooms
      function createRooms(uint256 id_) public{
        Room memory newRoom;
        newRoom.id = id_;
        newRoom.roomOwner = msg.sender;
        newRoom.isActive = true;
        RoomList[id_] = newRoom;
        totalRooms.push(id_); 
        emit NewVotingSystem  ();


    }
    //Delete Rooms
    function deleteRoom(uint256 roomId)public {
        require(RoomList[roomId].roomOwner == msg.sender);
        RoomList[roomId].isActive = false;
    }
        
    ///Add voter and whitelist
    function addVoter (address _address,uint256 roomId ) public   {
        require(RoomList[roomId].roomOwner == msg.sender);
        require (RoomList[roomId].status == WorkflowStatus.RegisteringVoters);
        Voter memory newVoter =  Voter ( true , _address, false , 0 );
        RoomList[roomId].whiteList[_address] = newVoter;
        RoomList[roomId].voters. push (_address);
        RoomList[roomId].votersCount ++ ;
        emit  VoterRegistered (_address);
    }
    //delete voter
    function deleteVoter ( address _address,uint256 roomId ) public   {
        require(RoomList[roomId].roomOwner == msg.sender);
        delete RoomList[roomId].whiteList[_address];
        RoomList[roomId].votersCount -- ;
        emit  VoterRemoved (_address);
    }

    function resetVotingSession (uint256 roomId) public  {
      require(RoomList[roomId].roomOwner == msg.sender);
        WorkflowStatus previous = RoomList[roomId].status;
        WorkflowStatus newStatus = WorkflowStatus.RegisteringVoters;
        RoomList[roomId].status = newStatus;
        emit NewVotingSystem  ( );
        emit  WorkflowStatusChange (previous, newStatus);
    }


    function startProposalRegistration (uint256 roomId) public  {
        require(RoomList[roomId].roomOwner == msg.sender);
        WorkflowStatus previous = RoomList[roomId].status;
        WorkflowStatus newStatus = WorkflowStatus.ProposalsRegistrationStarted;
        RoomList[roomId].status = newStatus;
        emit  ProposalsRegistrationStarted ();
        emit  WorkflowStatusChange (previous, newStatus);
    }

    function endProposalRegistration (uint256 roomId) public  {
        require(RoomList[roomId].roomOwner == msg.sender);
        WorkflowStatus previous = RoomList[roomId].status;
        WorkflowStatus newStatus = WorkflowStatus.ProposalsRegistrationEnded;
         RoomList[roomId].status = newStatus;
        emit  ProposalsRegistrationEnded ();
        emit  WorkflowStatusChange (previous, newStatus);
    }

    function startVotingSession (uint256 roomId) public  {
        require(RoomList[roomId].roomOwner == msg.sender);
        WorkflowStatus previous = RoomList[roomId].status;
        WorkflowStatus newStatus = WorkflowStatus.VotingSessionStarted;
        RoomList[roomId].status = newStatus;
        emit VotingSessionStarted  ();
        emit  WorkflowStatusChange (previous, newStatus);
    }

    function endVotingSession (uint256 roomId) public  {
        require(RoomList[roomId].roomOwner == msg.sender);
        WorkflowStatus previous = RoomList[roomId].status;
        WorkflowStatus newStatus = WorkflowStatus.VotingSessionEnded;
        RoomList[roomId].status = newStatus;
        emit VotingSessionEnded  ( );
        emit  WorkflowStatusChange (previous, newStatus);
    }




    function addProposal ( string  memory  _description ,uint256 roomId) public   {
  
        require ( RoomList[roomId].whiteList [ msg.sender ] .isRegistered ==  true , "voter not whitelisted" );
        require (RoomList[roomId].status == WorkflowStatus.ProposalsRegistrationStarted, "Proposals session has not started" );
        Proposal memory newProposal = Proposal (RoomList[roomId].proposalIds, msg.sender , _description , 0 );
        RoomList[roomId].proposals[RoomList[roomId].proposalIds] = newProposal;
        RoomList[roomId].proposalIds ++ ;
        emit  ProposalRegistered (RoomList[roomId].proposalIds);
    }

    function deleteProposal ( uint256 _id ,uint256 roomId ) public  {
        require ( RoomList[roomId].whiteList [ msg.sender ] .isRegistered ==  true , "voter not whitelisted" );
        require (RoomList[roomId].proposals[ _id ].owner ==  msg.sender ) ;
        delete RoomList[roomId].proposals[_id];
        emit  ProposalRemoved (_id);
    }

    function deleteProposalAdmin ( uint256 _id,uint256 roomId  ) public {
        require(RoomList[roomId].roomOwner == msg.sender);
        delete RoomList[roomId].proposals[_id];
    }

    function vote ( uint256 _id,uint256 roomId  ) public  {
         require ( RoomList[roomId].whiteList [ msg.sender ] .isRegistered ==  true , "voter not whitelisted" );
        require (RoomList[roomId].status == WorkflowStatus.VotingSessionStarted);
        require ( RoomList[roomId].whiteList [ msg.sender ] .hasVoted ==  false );
        RoomList[roomId].whiteList[ msg . sender ] .hasVoted =  true ;
        RoomList[roomId].proposals[_id].voteCount ++ ;
         emit Voted ( msg.sender , _id );
    }
   

     function count(uint256 roomId) public  {
         require(RoomList[roomId].roomOwner == msg.sender);
        require(RoomList[roomId].status == WorkflowStatus.VotingSessionEnded);
        uint8 id;
        uint256 highestCount;
        for (uint256 i = 0; i <= RoomList[roomId].proposalIds; i++) {
            if (highestCount < RoomList[roomId].proposals[i].voteCount) {
                highestCount = RoomList[roomId].proposals[i].voteCount;
                id = RoomList[roomId].proposals[i].id;
            }
        }
        RoomList[roomId].winningProposalId = id;
        RoomList[roomId].status = WorkflowStatus.VotesTallied;
        emit VotesTallied(RoomList[roomId].winningProposalId);   
    } 

}
