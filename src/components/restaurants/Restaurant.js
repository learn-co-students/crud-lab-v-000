// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer'

// class Restaurant extends Component {

//   handleDelete = () => {
//     this.props.deleteRestaurant(this.props.id)
//   }


//   render() {

//     return (
//       <div>
//         <li>
//           {this.props.text}
//           <button onClick={this.handleDelete}> X </button>
//           <ReviewsContainer restaurant={this.props}/>
//         </li>
//       </div>
//     );
//   }
// };

// export default Restaurant;

import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;