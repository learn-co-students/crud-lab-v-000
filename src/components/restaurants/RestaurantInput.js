import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text,
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>New Restaurant</label>
            <input type='text' onChange={this.handleChange} />
          </div>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
