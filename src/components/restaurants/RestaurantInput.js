import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  handleOnChange =(event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
        <input type="text" onChange = {this.handleOnChange}></input>
        <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
