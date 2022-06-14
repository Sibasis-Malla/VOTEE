/* eslint-disable */
import React, { useEffect, useContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProposalPage from './pages/ProposalPage';
import RoomsPage from './pages/RoomsPage';
import CreateProposal from './components/Forms/CreateProposal';
import StickyFooter from './components/marginals/Footer';
import CreateRoom from './components/Forms/CreateRoom';
import AdminPage from './pages/AdminPage';
import Web3Context from './context';

import HomePage from './pages/HomePage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  window.ethereum&&window.ethereum.on('accountsChanged', function (accounts) {
    setTimeout(window.location.reload(false), 1000);
  });

  //CheckIfWallet is Connectd
  const { checkIfWalletIsConnected } = useContext(Web3Context);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Router>
      <StickyFooter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/:room/proposals" element={<ProposalPage />} />
          <Route path="/:room/proposals/create" element={<CreateProposal />} />
          <Route path="/rooms/create" element={<CreateRoom />} />
          <Route path="/:room/admin" element={<AdminPage />} />
        </Routes>
      </StickyFooter>
    </Router>
  );
};

export default App;
