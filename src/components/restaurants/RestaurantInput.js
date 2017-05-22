import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  processChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  processSubmit(event) {
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
        <form onSubmit={(event) => this.processSubmit(event)}>
          <label>Add Restaurant</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.processChange(event)}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
