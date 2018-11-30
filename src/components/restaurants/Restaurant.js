import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  handleOnClick = event => {
    this.props.delete(this.props.restaurant);
  };

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li key={restaurant.key}>
          {restaurant.text}
          <button onClick={event => this.handleOnClick(event)}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
}

export default Restaurant;
