import React from 'react';
import Proposals from './components/Cards/Proposals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marginals from './components/shared/Marginals';
import ProposalPage from './pages/ProposalPage';
import RoomsPage from './pages/RoomsPage';

const App = () => {
  return (
    <Router>
      <Marginals>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/proposals" element={<ProposalPage />} />
        </Routes>
      </Marginals>
    </Router>
  );
};

export default App;
