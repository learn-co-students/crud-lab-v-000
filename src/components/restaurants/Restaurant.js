import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  handleOnClick = () => {
    //debugger;
    this.props.deleteRestaurant(this.props.restaurant.id)
    this.props.deleteAssociatedReview(this.props.restaurant.id)
  }


  render() {

    const { restaurant }  = this.props


    return (

      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> Delete </button>
          <ReviewsContainer restaurant={restaurant}/>
          
        </li>
      </div>

    );
  }
};



export default Restaurant;
