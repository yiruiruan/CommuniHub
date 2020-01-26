
import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import express from 'cors';


export default class MainPage extends React.Component {


    state = {
      projects: [],
    };

    componentDidMount() {
        var connect = require('connect');
        var app = connect();
      
        app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });
        axios.get('mongodb://localhost:27017/').then(res =>{
            console.log(res);
            this.ListeningStateChangedEvent({ projects: res.data});

        });
    }

    render() {
  return (
    
    <div className="App">
        {/* display shutterstock welcome img */}
        <Link to="/newEvent"> CREATE NEW EVENT </Link>
      <h3> LINK TO CREATE NEW EVENT  </h3>
      <Link to="/volunteer"> NEW VOLUNTEER APPLICATION </Link>
      <h3> LINK TO CREATE NEW VOLUNTEER  </h3>
      <small>
        ASSIGNMENTS:
      </small>
      {/* loop events */}
      {this.state.projects.map(projects => <li>{projects.name}</li>)}
    </div>
  )
}

}
