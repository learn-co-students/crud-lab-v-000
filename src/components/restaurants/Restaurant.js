import React, { Component } from 'react';

class Restaurant extends Component {
  render() {

  	handleClick = () => {
  	  this.props.store.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  	}

    return (
      <div>
        <li>{this.props.restaurant.text} <button onClick={this.handleClick}>Delete Restaurant</button></li>
      </div>
    );
  }
};

export default Restaurant;