import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleNameChange = (event) => {
    this.setState(
      {
        text: event.target.value,
      }
    )
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch(
      {
        type: 'ADD_RESTAURANT',
        restaurant: {
          text: this.state.text
        }
      }
    );
    this.setState(
      {
        text: '',
      }
    );
  }
  
  render() {
    return (
      <div>
        <h3>Add Restaurant</h3>
        <form onSubmit={this.handleFormSubmit} >
          <input value={this.state.text} onChange={this.handleNameChange} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
