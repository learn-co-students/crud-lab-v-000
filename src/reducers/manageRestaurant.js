import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.text, id: cuidFn()}
      return {...state, restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state, restaurants: restaurants}
    case 'ADD_REVIEW':
      const review = {text: action.text, restaurantId: action.restaurantId, id: cuidFn()}
      return {...state, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews: reviews}
    // case 'ADD_REVIEW':
    //   const restaurantByID = state.restaurants.find(restaurant => restaurant.id === action.restaurantId)
    //   if (restaurantByID.reviews) {
    //     restaurantByID.reviews.push({content: action.content, id: cuidFn()})
    //   } else {
    //     restaurantByID.reviews = [{content: action.content, id: cuidFn()}]
    //   }
    //   const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
    //   return {restaurants: filteredRestaurants.concat(restaurantByID)}
    // case 'DELETE_REVIEW':
    //   const foundRestaurant = state.restaurants.find(restaurant => restaurant.id === action.restaurantId)
    //   foundRestaurant.reviews = foundRestaurant.reviews.filter(review => review.id !== action.reviewId)
    //   const refilteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
    //   return {restaurants: refilteredRestaurants.concat(foundRestaurant)}
    default:
      return state;
  }
}
