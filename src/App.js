import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainComponent from './components/main/main.jsx';
import Features from './components/main/features/features';
import Princing from './components/main/pricing/pricing';
import NotFound from './components/404/404';

class App extends Component {


  constructor(props) {
    super(props);
    this.state={
      message :'hello',
      features: [
        { id:'1', value: 'value 1'  },
        { id:'2', value: 'value 2'  },
        { id:'3', value: 'value 3'  },
        { id:'4', value: 'value 4'  },
        { id:'5', value: 'value 5'  },
      ]
    };
  }

  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact    ><MainComponent message={this.state.message} /></Route>
          <Route path='/features'  ><Features features={this.state.features}  /></Route>
          <Route path='/pricing'   ><Princing /></Route>
          <Route path='*'   ><NotFound /></Route>
        </Switch>
        <Footer/>
      </Router>
    );
  }
 
}

export default App;
