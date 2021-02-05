import React, { Component } from 'react';
import { Col, Row, Container } from '../Grid';
import { Card } from 'react-bootstrap';
import API from "../../utils/API";
import './style.css';

class Register extends Component {
  
  state = {
    first: "",
    username: "",
    email: "",
    password: ""
  }

  handleNameChange = event => {
    this.setState({first: event.target.value})
  };

  handleUserChange = event => {
    this.setState({username: event.target.value})
  };

  handleEmailChange = event => {
    this.setState({email: event.target.value})
  };

  handlePassChange = event => {
    this.setState({password: event.target.value})
  };

  registerUser = event => {
    event.preventDefault();
    console.log(this.state);
    API.registerUser(this.state)        
    .then( (response) => {
      if (response.data.results === "success") {
        let token = response.data.token;
        console.log(token);
        localStorage.setItem("SavedToken", 'Bearer ' + token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        (this.$router.push({name:'HomePage'}));
      }
      else {
        console.log(response.data.reason)
      }
      })
  };

  render() {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" onChange={this.handleNameChange} />
      </div>

      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Username" onChange={this.handleUserChange} />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={this.handleEmailChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={this.handlePassChange}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" onClick={this.registerUser}>
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}}

export default Register;
