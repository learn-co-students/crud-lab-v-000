import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange(ev) {
    this.setState({
      text: ev.target.value,
    });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text"
        value={this.state.text}
        onChange={(event) => this.handleOnChange(event)} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
