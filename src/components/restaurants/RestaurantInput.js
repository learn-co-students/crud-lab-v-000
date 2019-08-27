import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {

  constructor() {
    super(),
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' 
            value={this.state.text} 
            onChange={(event) => this.handleChange(event)}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
