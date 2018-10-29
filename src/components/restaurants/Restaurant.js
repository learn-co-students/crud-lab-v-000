import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {this.props.text}
           <button onClick={this.handleOnClick}>
              Delete
          </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
