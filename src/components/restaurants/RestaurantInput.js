import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({text: e.target.value})
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
