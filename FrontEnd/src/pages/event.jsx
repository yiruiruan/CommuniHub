import React from 'react';
import '../App.css';
import axios from 'axios';

export default class EventPage extends React.Component {
  
  state = {
    type: 'event',
    image: ''
  };

  //get event type from BE

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

  render() {
  return (
    <div className="App">
      <h3> GET EVENT NAME  </h3>
      {/* display shutterstock img */}
      <small>
        Volunteers:
      </small>
      {/* loop volunteers */}
    </div>
  )
}
}