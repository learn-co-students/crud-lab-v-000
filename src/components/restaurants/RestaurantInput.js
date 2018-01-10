import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()

    this.state = {
      text:""
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type: 'ADD_RESTAURANT', text: this.state.text })
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input value={this.state.text} onChange={(e) => {this.handleChange(e)}} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
