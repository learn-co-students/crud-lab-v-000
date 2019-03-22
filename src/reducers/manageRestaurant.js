import cuid from 'cuid'

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch(action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { id: cuid(), text: action.text } 

      return (
        action.text !== '' ?
        { ...state, restaurants:  [...state.restaurants, restaurant] } : 
        state
      )

    case 'DELETE_RESTAURANT':

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { ...state, restaurants }

    case 'ADD_REVIEW':
     
      const review = { id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId }
      
      return (
        action.review.text !== '' ?
        { ...state, reviews: [...state.reviews, review] } :
        state
      )

    case 'DELETE_REVIEW':
      
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews }

    default:

      return state
  }

}
