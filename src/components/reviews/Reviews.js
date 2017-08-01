import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const reviews = this.props.store.getState().reviews.reduce((accum, el, index) => {
      if(el.restaurantId === this.props.restaurantId){
        accum.push(
          <Review key={index}
            store={this.props.store}
            review={el}/>
        )
      }
      return accum;
    },[])

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
