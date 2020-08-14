import React from 'react';
import './App.css';
import Nav from './Nav';
import weather from './weather';
import covid from './covid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>Welcome!!</h1>
        <h2>Click on nav-bar for info</h2>
        <Switch>
          <Route path="/weather" component={weather} />
          <Route path="/covid" component={covid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
