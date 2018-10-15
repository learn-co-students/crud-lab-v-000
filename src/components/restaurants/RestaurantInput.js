import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({type: "ADD_RESTAURANT", text: this.state.text})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Restaurant name:</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect()(RestaurantInput);
