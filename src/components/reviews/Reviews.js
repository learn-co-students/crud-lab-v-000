import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store, restaurantId } = this.props;
    const associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);
    const reviews = associatedReviews.map((review, index) => {
      return <Review store={store} key={index} review={review} />
    })

    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    );
  }

};

export default Reviews;



// import React, { Component } from 'react';
// import Review from './Review';

// class Reviews extends Component {
//   render() {
//     const resReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
//     const reviews = resReviews.map((review,index)=>{
//       return (
//         <Review review={review} key={index} store={this.props.store} />
//       )
//     })

//     return (
//       <ul>
//         {reviews}
//       </ul>
//     );
//   }
// };

// export default Reviews;