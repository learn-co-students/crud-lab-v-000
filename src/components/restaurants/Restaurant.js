import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}>DELETE</button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;




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

