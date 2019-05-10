import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../../actions/actions.js'
import { cuidFn } from '../../App.js';

class RestaurantInput extends Component {
  
  state = {
    text: '',
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Not super sure if I want e.target.value
    this.props.addRestaurant({
      text: this.state.text,
      id: cuidFn(), 
    });
    this.setState({
      text: '',
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
       
            <input 
            
              onChange={this.handleChange} 
              placeholder="Add a restaurant"
              type="text" 
              value={this.state.text} 
            />
            
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: rest => dispatch(addRestaurant(rest)), 
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput);
