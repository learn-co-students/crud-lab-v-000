import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


// TN: helpful for seeing internal state
  clicky = () => {
    let st = this.props.store.getState()
    console.log(st)

    const reviews = this.props.store.getState().reviews
    // .filter(r => r.restaurantID === this.props.restaurantID)
    console.log(reviews)
    console.log('resyaurant id: ', this.props.restaurantId)

  }

  render() {

// TN: Big thing that messed me up for a while: I KEPT WRITING restaurantID instead of restaurantId!!
// BIG WASTE OF TIME FOR THIS MISTAKE!
    const reviews = this.props.store.getState().reviews.filter(r => r.restaurantId === this.props.restaurantId).map((review, index) => {
       return (<Review store={this.props.store} key={index} review={review}/>)})

    return (
      <ul>
        Review console button: <button onClick={(event)=>this.clicky(event)} />
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
