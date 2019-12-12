import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
//   need to put Review container in here.... {ReviewsContainer}

  render() {
    // const { restaurantPackage } = this.props;
    // debugger
    return (
      <div>
        <ul>
          
        <li>
          <p>Restaurant name  {this.props.restaurant.text} </p> 
          
            <p>Restaurant Id{this.props.restaurant.id}  </p>
          </li>
        
          </ul>
          {/* Note the resutrant is coming in from line 8# */}
          <button onClick={() => this.props.delete(this.props.restaurant.id)}> X#</button>
          
          <ReviewsContainer restaurant={this.props.restaurant} />
          
          {/* {ReviewsContainer} */}
        
      </div>
     
    );

  }
};



export default Restaurant;
