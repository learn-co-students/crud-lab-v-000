import React, { Component } from 'react';
import {connect} from 'react-redux'

class RestaurantInput extends Component {
  
  state = {
    text: ""
  }

  handleOnChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        Restaurant Input
        <input onChange={this.handleOnChange} value={this.state.text}></input>
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
