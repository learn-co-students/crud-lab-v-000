import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state,
    });
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <input type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
          </form>
      </div>
    );
  }
};

export default RestaurantInput;
