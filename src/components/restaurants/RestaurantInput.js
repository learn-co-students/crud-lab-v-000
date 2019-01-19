import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {

  constructor (props)  {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add a restaurant:</label>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
