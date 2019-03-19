import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = props => {

	const restaurants = props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} deleteRestaurant={props.deleteRestaurant} />)
  
    return(
      <ul>
        {restaurants}
      </ul>
    )
}

export default Restaurants