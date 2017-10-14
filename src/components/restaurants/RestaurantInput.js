import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor( ) {
    super()
    this.state = {
      text: '',
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text"
          onChange={this.handleOnChange}
          value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
