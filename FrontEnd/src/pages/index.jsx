
import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import Button from '@material-ui/core/Button';



export default class MainPage extends React.Component {

    state = {
      projects: [],
      image: ''
    };

    componentDidMount() {
      Promise.all([
        axios.get('https://api.shutterstock.com/v2/images/search?query=welcome', {
          auth: {
            username: '0BQG2MOeAYW71gyAa9eqmSqyoqpKSG5L',
            password: 'R5pkYG1gX6hSGBTi'
          }
        }),
        axios.get('http://localhost:3001/community')
      ])
     .then(([{ data }, projects]) => {
        // console.log(data)
        // console.log(data.data.length)
        var rndm = Math.floor(Math.random() * data.data.length)
        // console.log(rndm)
        console.log(projects)
        this.setState({
          image: data.data[rndm].assets.preview.url,
          projects: projects.data
        })
      })
    }

    render() {
  return (
    
    <div className="App">
        {this.state.image && <img src={this.state.image} />}
        <Link to="/newEvent" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
        CREATE NEW EVENT
</Button> </Link>
      
      <Link to="/volunteer" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
      NEW VOLUNTEER APPLICATION
      </Button> </Link>

      <small>
        ASSIGNMENTS:
      </small>      
     
      {this.state.projects.map((project, i) =>  <Link key={i} to={{pathname:'/event', state: project}} style={{ textDecoration: 'none' }}> <Button variant="outlined" color="secondary">{project.eventName} </Button> </Link>)}
    </div>
  )
}

}
