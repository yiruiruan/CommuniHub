import React from 'react';
import '../App.css';
import axios from 'axios';

export default class EventPage extends React.Component {
  
  state = {
    volunteers: [],
    type: 'default',
    image: ''
  };

  componentDidMount() {
    var type = this.state.type

    var url = 'https://api.shutterstock.com/v2/images/search?query='+ type
    console.log(url)
    axios.get('https://api.shutterstock.com/v2/images/search?query=this.state.type', {
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

  renderVolunteers(){
    axios.post('http://localhost:3001/assignment', {id: this.props.location.state.id}).then((volunteers) => {
      this.setState({
        volunteers: volunteers.data
      })
    });
  }

  render() {
  return (
    <div className="App">
      {this.state.image && <img src={this.state.image} />}
      <h3> {this.props.location.state.eventName}  </h3>
      <small>
        Volunteers:
      </small>
      {/* loop volunteers and get name and timeslots */}
      {/* GET FROM DB */}
      {this.state.volunteers.map((volunteers, i) =>  <ul key={i} to={{pathname:'/event', state: {volunteers}}} style={{ textDecoration: 'none' }}> {volunteers.name} </ul>)}
    </div>
  )
}
}