import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add A New Restaurant:</label><br/>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleOnChange} />{' '}
          <input type='submit' />
        </form><br/><br/>
        <label>Your Restaurants:</label>
      </div>
    );
  }
};

export default RestaurantInput;
