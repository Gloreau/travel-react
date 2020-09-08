import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components//Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
