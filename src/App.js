import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components//Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Products from './components/pages/Products'
function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />

        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
