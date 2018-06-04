import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      text: ''
    };
  }

  handleRestaurantChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleRestaurantSubmit(event) {
    event.preventDefault(); 
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT', 
      restaurant: {
        text: this.state.text, 
      },
    }); 
    this.setState({
      text: '', 
    }); 
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleRestaurantSubmit(event)}>
          <input type="text" 
          value={this.state.text}
          onChange={(event) => this.handleRestaurantChange(event)} /> 
          <input type="submit" /> 
        </form> 
      </div>
    );
  }
};

export default RestaurantInput;
