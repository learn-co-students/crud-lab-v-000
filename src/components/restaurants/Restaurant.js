import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = event => {
    this.props.deleteRestaurant(this.props.id)
  }
  render() {
    return (
      <div>
        <li>
          {this.props.text}
        <button onClick={() => this.handleClick()}> X </button>
        </li>
        <ReviewsContainer
          reviews={this.props.reviews}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}
          restaurantId={this.props.id}
        />
      </div>
    );
  };
};

export default Restaurant;
