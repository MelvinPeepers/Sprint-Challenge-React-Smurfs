import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      errorMessage: null
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.props.updateSmurfs(response.data);
        this.props.history.push("/smurfs");
        this.setState({
          errorMessage: null
        });
        // Post working smurfs being added
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.error
        });
      });

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, age, height, errorMessage } = this.state;

    return (
      <div className='SmurfForm form'>
        <h1>Add New Smurf</h1>
        <p>{errorMessage}</p>
        <form onSubmit={this.addSmurf}>
          <div className='input-field'>
            <input
              onChange={this.handleInputChange}
              placeholder='name'
              value={name}
              name='name'
            />
          </div>
          <div className='input-field'>
            <input
              onChange={this.handleInputChange}
              placeholder='age'
              value={age}
              name='age'
            />
          </div>
          <div className='input-field'>
            <input
              onChange={this.handleInputChange}
              placeholder='height'
              value={height}
              name='height'
            />
          </div>
          <button type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
