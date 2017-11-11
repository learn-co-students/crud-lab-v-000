import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props.restaurantId)
    const reviews = this.props.store.getState().reviews
      .filter((review)=>review.restaurantId===this.props.restaurantId)
      .map((review, index)=>{
        return (<Review key={index} review={review} store={this.props.store}/>)
      })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
