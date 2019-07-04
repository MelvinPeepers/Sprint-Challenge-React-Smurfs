import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ logo }) => {
  return (
    <div className='home-container'>
      <h2>
        <Link to='/smurfs'>Enter</Link> {logo}
      </h2>
    </div>
  );
};

Home.defaultProps = {
  logo: "Smurf Village"
};

Home.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Home;
