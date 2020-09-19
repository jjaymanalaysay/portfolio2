import React from 'react';
import './App.css';

import AppNavbar from './components/AppNavbar'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
