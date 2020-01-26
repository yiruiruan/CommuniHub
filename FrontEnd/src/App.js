import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages";
import NewEventPage from './pages/newEvent';
import VolunteerPage from './pages/volunteer';
import EventPage from './pages/event';

class App extends Component {

  state = {
    api_url: ""
  }

  handleApiChange = (api) => {
    this.setState({
      api_url: api
    })
  }

  componentDidMount() {
  }

  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/newEvent" component={NewEventPage} />
      <Route exact path="/volunteer" component={VolunteerPage} />
      <Route exact path="/event" component={EventPage} />
      </Switch>
    </Router>
  }
}

export default App;
