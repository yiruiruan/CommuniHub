import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class VolunteerPage extends React.Component {

  state = {
    projects: [],
    image: ''
  };

  componentDidMount() {
    axios.get('https://api.shutterstock.com/v2/images/search?query=volunteer', {
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

  constructor(props) {
    super(props);
    this.state = {
        eventName: '' || undefined,
        date: new Date() || undefined,
        startTime: '' || undefined,
        endTime: '' || undefined,
        type: '' || undefined,
        email: '' || undefined,
    };
console.log(this.state.date);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleEventNameChange(event) {
    console.log(event.target.value)
    this.setState(
        {eventName: event.target.value});
  }
handleDateChange(event) {
  this.setState(
      {date: event.target.value});
  }
handleStartTimeChange(event) {
  this.setState(
      {startTime:  event.target.value});
  }
handleEndTimeChange(event) {
  this.setState(
      {endTime: event.target.value});
  }
handleTypeChange(event) {
  this.setState(
      {type: event.target.value});
  }
handleEmailChange(event) {
    this.setState(
        {email: event.target.value});
    }
  


handleSubmit(event) {
    var string = "{name=" + this.state.eventName 
    + ", date="+ this.state.date 
    + ", startTime=" + this.state.startTime
    + ", endTime=" +this.state.endTime
    + ", typeOfWork=" + this.state.type 
    + ", numNeeded=" +this.state.quorum + "}"
    console.log(string)
  alert('A name was submitted: ' + this.state.eventName);
  }

  render() {
  return (
    <div className="App">
      {this.state.image && <img src={this.state.image} />}
      <h3>VOLUNTEER APPLICATION</h3>
      {/* make form to create new volunteer */}
      <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" value={this.state.eventName} onChange={e => this.handleEventNameChange(e)} />
                    </label><br></br>
                    <label>
                        E-mail: 
                        <input type="text" value={this.state.quorum} onChange={this.handleEmailChange} />
                    </label><br></br>
                    <label>
                        Date Available: 
                        <input type="text" value={this.state.date} onChange={this.handleDateChange} />
                    </label><br></br>
                    <label>
                        Available Start Time: 
                        <input type="text" value={this.state.startTime} onChange={this.handleStartTimeChange} />
                    </label><br></br>
                    <label>
                        End Time: 
                        <input type="text" value={this.state.endTime} onChange={this.handleEndTimeChange} />
                    </label><br></br>
                    <label>
                        Type of work preference: 
                        <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
                    </label><br></br>
                    
                
                <Button type="submit" value="Submit" variant="contained" color="primary">
                SUBMIT
                </Button>
                </form>
    </div>
  )
}
}
