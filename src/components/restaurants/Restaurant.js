import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { connect } from 'react-redux';

class Restaurant extends Component {

  handleOnClick = (id) => {
    debugger;
    this.props.deleteRestaurant(id);
  }

  render() {
    const  restaurant  = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
        </li>
          <button 
            onClick={() => this.handleOnClick(restaurant.id)}> 
            X 
          </button>
          <ReviewsContainer restaurantId={restaurant.id} restaurant={restaurant}/>
      </div>
    );
  }
};

//   render() {
//     return (
//       <div>
//         <li>
//           {this.props.text}
//           <button 
//             onClick={() => this.handleOnClick(this.props.id)}> 
//             X 
//           </button>

//           <ReviewsContainer restaurantId={this.props.id} restaurant={this.props.text}/>
//         </li>
//       </div>
//     );
//   }
// };

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: id => {
      dispatch({
        type: "DELETE_RESTAURANT",
        id: id
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Restaurant)