import React, { Component } from 'react';

class Restaurant extends Component {
  
  handleClick = (e)=> {
  	this.props.store.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }

  render() {
    return (
      <div>
	    <li>
	    	name: {this.props.restaurant.text} <button onClick={this.handleClick}>x</button>
	    </li>
      </div>
    );
  }
};

export default Restaurant;