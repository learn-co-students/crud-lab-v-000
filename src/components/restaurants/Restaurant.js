import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDelete = id => {
    this.props.deleteRestaurant(id)
  }


  render() {
    return (
      <div>
        <li>
          { this.props.restaurant.text }
          &nbsp; <button onClick={ () => this.handleDelete( this.props.restaurant.id ) }> DELETE </button> <br />
          <ReviewsContainer restaurantId={ this.props.restaurant.id }/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

          // <ReviewsContainer restaurant={restaurant}/>
