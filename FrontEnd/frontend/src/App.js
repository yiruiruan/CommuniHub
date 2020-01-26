import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages";
import NewEventPage from './pages/newEvent';

import VolunteerPage from './pages/volunteer';

class App extends Component {
  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/newEvent" component={NewEventPage} />
      <Route exact path="/volunteer" component={VolunteerPage} />
      </Switch>
    </Router>
  }
}

export default App;
