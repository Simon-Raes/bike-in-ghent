import React from 'react';
import './App.css';

import {
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home'
import Parking from './pages/parking'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/parking" component={Parking} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
