import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
