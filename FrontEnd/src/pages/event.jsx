import React from "react";
import "../App.css";
import axios from "axios";

export default class EventPage extends React.Component {
<<<<<<< HEAD
  
  
  state = {
    volunteers: [],
    type: 'default',
    image: ''
=======
  state = {
    type: "default",
    image: ""
>>>>>>> e3aae8dea901aff4da30b8c24d9053799b1f34b5
  };

  //get event type from BE

  componentDidMount() {
    var type = this.state.type;

    var url = "https://api.shutterstock.com/v2/images/search?query=" + type;
    console.log(url);
    axios
      .get(
        "https://api.shutterstock.com/v2/images/search?query=this.state.type",
        {
          auth: {
            username: "0BQG2MOeAYW71gyAa9eqmSqyoqpKSG5L",
            password: "R5pkYG1gX6hSGBTi"
          }
        }
      )
      .then(({ data }) => {
        console.log(data);
        console.log(data.data.length);
        var rndm = Math.floor(Math.random() * data.data.length) + 1;
        console.log(rndm);
        this.setState({
          ...this.state,
          image: data.data[rndm].assets.preview.url
        });
      });
  }

<<<<<<< HEAD
  renderVolunteers(){
    axios.post('http://localhost:3001/community', {id: this.props.location.state.id}).then((volunteers) => {
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
=======
  renderVolunteers() {
    axios.get("").then(() => {});
  }

  render() {
    return (
      <div className="App">
        <img
          src="communihub_logo.png"
          alt="logo"
          style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        />
        {this.state.image && (
          <img src={this.state.image} style={{ borderRadius: 400 / 2 }} />
        )}
        {this.state.image && <img src={this.state.image} />}
        <h3> GET EVENT NAME </h3>
        <small>Volunteers:</small>
        {/* loop volunteers and get name and timeslots */}
        {/* GET FROM DB */}
      </div>
    );
  }
>>>>>>> e3aae8dea901aff4da30b8c24d9053799b1f34b5
}
