import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Home from "./components/Home";
import Edit from "./components/Edit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get("http://localhost:3333/smurfs");

    this.setState({ smurfs: response.data, loading: false });
  }
  // will pass a function to the 'SmurfForm' to call when it gets new data
  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <div className='navbar'>
          <h1>Smurf Village</h1>
          <ul className='navLinks'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/smurf-form'>Add New Smurf</NavLink>
            </li>
          </ul>
        </div>

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
        <Route
          path='/edit/:id'
          exact
          render={props => <Edit {...props} updateSmurfs={this.updateSmurfs} />}
        />
      </div>
    );
  }
}

export default App;
