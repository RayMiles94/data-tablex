import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainComponent from './components/main/main.jsx';
import Features from './components/main/features/features';
import Princing from './components/main/pricing/pricing';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={MainComponent} />
        <Route path='/features' component={Features} />
        <Route path='/pricing' component={Princing} />
      </Switch>
      <Footer/>
    </Router>


  );
}

export default App;
