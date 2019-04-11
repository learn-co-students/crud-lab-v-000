import React from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = props => {

  const { restaurant } = props

  const handleOnClick = () => props.deleteRestaurant(restaurant.id)

  return (
    <div>
      <li>
        {restaurant.text}
        <button onClick={handleOnClick}> x </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  )
}

export default Restaurant
