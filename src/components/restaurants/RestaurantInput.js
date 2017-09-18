import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      }
    });
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input text='type' value={this.state.text} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

export default RestaurantInput;
