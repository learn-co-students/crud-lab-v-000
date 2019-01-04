// import React, { Component } from 'react';

// class Review extends Component {

//   handleDelete = () => {
//     this.props.deleteReview(this.props.review.id)
//   }

//   render() {
//     // const { review } = this.props

//     return (
//       <div>
//         <li>
//           {this.props.review.text}
//         </li>
//         <button onClick={this.handleDelete}> X </button>
//       </div>
//     );
//   }

// };

// export default Review;

import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Review;