import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
    });

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add restaurant</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
