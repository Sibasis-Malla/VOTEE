import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProposalPage from './pages/ProposalPage';
import RoomsPage from './pages/RoomsPage';
import CreateProposal from './components/Forms/CreateProposal';
import StickyFooter from './components/marginals/Footer';
import CreateRoom from './components/Forms/CreateRoom';

const App = () => {
  return (
    <Router>
      <StickyFooter>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/proposals" element={<ProposalPage />} />
          <Route path="/proposals/create" element={<CreateProposal />} />
          <Route path="/rooms/create" element={<CreateRoom />} />
        </Routes>
      </StickyFooter>
    </Router>
  );
};

export default App;
