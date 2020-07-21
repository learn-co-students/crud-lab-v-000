import React, { Component } from 'react';

// allows a user to create new restaurants.
//only use basic input elements for this lab's tests.

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };


  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type="text" 
            value={this.state.text}
            onChange={this.handleChange}>
            
          </input>
          <input type="submit"></input>

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
