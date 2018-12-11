import React, { Component } from 'react';

class Review extends Component {


  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }

};

export default Review;




// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         <li>{this.props.name}</li><button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button>
//       </div>      
//     );
//   }
// };

// export default Band;
