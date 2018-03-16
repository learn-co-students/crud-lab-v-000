import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
        id: cuid()
      },
    });
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
