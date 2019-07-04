import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className='characters-list-wrapper'>
      <div className='character-card'>
        <h3>{props.name}</h3>
        <p>
          <strong>{props.height}</strong> tall
        </p>
        <p>{props.age} smurf years old</p>
        <div className='editSmurf'>
          <Link to={`/edit/${props.id}`}>edit</Link>
        </div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
