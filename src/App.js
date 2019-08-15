import React from 'react';
import TopNav from './components/TopNav'
import Routes from './routes'
import 'semantic-ui-css/semantic.min.css'
import { HashRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="background">
    <div className="main">
      <Router>
        <Routes/>
      </Router>
      </div>
    </div>
  );
}

export default App;
