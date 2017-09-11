import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({type: "ADD_RESTAURANT", text: this.state.text});
    this.setState({text: ''});
  }

  handleChange = e => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
