import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      } 
    });

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className='restaurant-form'>
      <h1>Add a Restaurant</h1>
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleOnChange } 
            type='text'
            value={ this.state.text }
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
