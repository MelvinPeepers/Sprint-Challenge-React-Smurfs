import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-container'>
      <h1>Smurf Village</h1>
      <Link to='/smurfs'>Enter</Link>
    </div>
  );
}

export default Home;
