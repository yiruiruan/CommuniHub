import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages";

class App extends Component {
  render() {
    return <Router>
      <Route path="/" component={MainPage} />
    </Router>
  }
}

export default App;
