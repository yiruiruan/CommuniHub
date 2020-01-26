
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
      axios.get('https://api.shutterstock.com/v2/images/search?query=welcome', {
        auth: {
          username: '0BQG2MOeAYW71gyAa9eqmSqyoqpKSG5L',
          password: 'R5pkYG1gX6hSGBTi'
        }
      }).then(({ data }) => {
        console.log(data)
        console.log(data.data.length)
        var rndm = Math.floor(Math.random() * data.data.length) + 1 
        console.log(rndm)
        this.setState({
          ...this.state,
          image: data.data[rndm].assets.preview.url
        })
      })
    }

    render() {
  return (
    
    <div className="App">
        {this.state.image && <img src={this.state.image} />}
        {/* display shutterstock welcome img */}
        <Link to="/newEvent" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
        CREATE NEW EVENT
</Button> </Link>
      
      <Link to="/volunteer" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
      NEW VOLUNTEER APPLICATION
      </Button> </Link>

      <Link to="/event" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
      (arraynumber).eventName
      </Button> </Link>
      
      <small>
        ASSIGNMENTS:
      </small>
      {/* loop events (for each row in result.data) */}
      {/* <Link to="/event" style={{ textDecoration: 'none' }}> <Button variant="contained" color="secondary">
      (arraynumber).eventName
      </Button> </Link> */}
      {this.state.projects.map(projects => <li>{projects.name}</li>)}
    </div>
  )
}

}
