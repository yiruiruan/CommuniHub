import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


const MainPage = () => {
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
    </div>
  )
}

export default MainPage;
