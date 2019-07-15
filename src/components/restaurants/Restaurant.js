import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

export default ({restaurant, deleteRestaurant}) => (

      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> Delete </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
)
