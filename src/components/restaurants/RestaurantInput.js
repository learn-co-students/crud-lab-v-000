import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleOnChange(ev) {
    this.setState({ text: ev.target.value });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          <input
            value={this.state.text}
            onChange={(ev) => this.handleOnChange(ev)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
