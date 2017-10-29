import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews.filter((review)=>{
          return review.restaurantId === this.props.restaurantId;
        }).map((review, index)=>{
          return (<Review review={review} key={index}
            store={this.props.store} />);
        })}
      </ul>
    );
  }
};

export default Reviews;
