import React from "react";

const Smurf = props => {
  return (
    <div className='characters-list-wrapper'>
      <div className='character-card'>
        <h3>{props.name}</h3>
        <p>
          <strong>{props.height}</strong> tall
        </p>
        <p>{props.age} smurf years old</p>
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
