import React, { Component } from "react";
import axios from "axios";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      errorMessage: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        const { name, age, height } = response.data;
        this.setState({ name, age, height });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.error
        });
      });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = event => {
    event.preventDefault();

    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:3333/smurfs/${id}`, newSmurf)
      .then(response => {
        // passing through the new list data
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

  deleteSmurf = event => {
    event.preventDefault();

    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        // passing through the new list data
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

  render() {
    const { name, age, height, errorMessage } = this.state;

    return (
      <div className='SmurfForm form'>
        <h1>Edit Smurf</h1>
        <p>{errorMessage}</p>
        <form onSubmit={this.updateSmurf}>
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
          <button type='submit'>Update</button>
          <button onClick={this.deleteSmurf} type='submit'>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
