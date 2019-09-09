import React, { Component } from 'react';
import Reviews from './Reviews';


class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    console.log('ReviewInput - HOS - this.props', this.props)
    console.log('ReviewInput2 - HOS - this.props.restaurantID', this.props.restaurantID)
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    console.log('In ReviewInput-render- this.props', this.props)
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)} />
          <input type="submit" value="Submit Review" />
        </form>
        Review Input
        {/* <Review id={review.reviewId} key={review.reviewId} review={review} /> */}
        <Reviews restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput
