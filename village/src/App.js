import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log("No smurffing way, there's an error!", error);
      });
  }

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <ul className='navbar'>
          <div className='navtitle'>
            <h1>Smurf Village</h1>
          </div>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/smurf-form'>Add New Smurf</NavLink>
          </li>
        </ul>

        <Route
          path='/'
          exact
          render={props => <Home {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          path='/smurfs'
          exact
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          path='/smurf-form'
          exact
          render={props => (
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;
