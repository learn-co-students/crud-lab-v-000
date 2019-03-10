import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  filterAndMap = (props) => {
    const newArr = []
    const arr = props.reviews

    for (var i = 0; i < arr.length; i++) {
      const review = arr[i]

      if (review.restaurantId === props.restaurantId) {
        newArr.push(arr[i])
      }
    }
    return newArr.map(review => (<Review review={review}
                                  restaurantId={props.restaurantId}
                                  deleteR={props.deleteR}
                                  formMethod={props.updateR}
                                  key={review.id} />))
  }

  render() {
    return (
      <ul>
        {this.filterAndMap(this.props)}
      </ul>
    );
  }
};

export default Reviews;