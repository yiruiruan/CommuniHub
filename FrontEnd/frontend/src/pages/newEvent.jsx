
import React from 'react';
import '../App.css';


export default class NewEventPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '' || undefined,
            date: new Date() || undefined,
            startTime: '' || undefined,
            endTime: '' || undefined,
            type: '' || undefined,
            quorum: '' || undefined,
        };
    console.log(this.state.date);
        this.handleEventNameChange = this.handleEventNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleQuorumChange = this.handleQuorumChange.bind(this);
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
    handleQuorumChange(event) {
        this.setState(
            {quorum: event.target.value});
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
                <h3>CREATE A NEW EVENT</h3>
                {/* Make form to create new event */}
                {/* eventName, startTime, endTime, type */}
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" value={this.state.eventName} onChange={e => this.handleEventNameChange(e)} />
                    </label><br></br>
                    <label>
                        Date: 
                        <input type="text" value={this.state.date} onChange={this.handleDateChange} />
                    </label><br></br>
                    <label>
                        Start Time: 
                        <input type="text" value={this.state.startTime} onChange={this.handleStartTimeChange} />
                    </label><br></br>
                    <label>
                        End Time: 
                        <input type="text" value={this.state.endTime} onChange={this.handleEndTimeChange} />
                    </label><br></br>
                    <label>
                        Type: 
                        <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
                    </label><br></br>
                    <label>
                        Number of Volunteers Needed: 
                        <input type="text" value={this.state.quorum} onChange={this.handleQuorumChange} />
                    </label><br></br>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
}
}