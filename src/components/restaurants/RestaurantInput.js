import React, { Component } from 'react';
import {connect} from 'react-redux'

class RestaurantInput extends Component {
  state = {
    text: ""
  }
  handleSubmit = e => {
    e.preventDefautl();
    this.props.addRestaurnat(this.state)
    this.setState({
      name: ""
    })
    
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <label htmlFor="Restaurant"></label>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit">Submit</input>
        </form>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  addRestaurant:  addRestaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant})
})
export default connect(null, mapDispatchToProps)(RestaurantInput);
