import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;
    console.log(this.props)
    // if(this.props)
    // problem:
    //   reviews are rendering after each restaurant - like theres no distinguishing restaurantid

    return (

      <div>
          <li>
            {review.text}
          </li>
        <button onClick={(event) => this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
