import React from 'react';
import Proposals from './components/Cards/Proposals';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Marginals from './components/shared/Marginals';
import ProposalPage from './pages/ProposalPage';
import { makeStyles } from '@mui/styles';

const App = () => {
  return (
    <Router>
      <Marginals>
        <ProposalPage />
      </Marginals>
    </Router>
  );
};

export default App;
