
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants: [],
  reviews: [],
}, action) {
  switch(action.type){
    //Add Resaurant
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.text, id: cuid()}
      return Object.assign({},state,{restaurants: state.restaurants.concat(restaurant)})
    //Remove Resturant
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((r)=>r.id!==action.id)
      return Object.assign({},state,{restaurants})
    //Add Review
    case 'ADD_REVIEW':
      const review = {text: action.text, restaurantId: action.restaurantId, id: cuid() }
      return Object.assign({},state,{reviews: state.reviews.concat(review)})
    //Remove Review
    case 'DELETE_REVIEW':
      //debugger
      const reviews = state.reviews.filter((r)=>r.id!==action.id)
      return Object.assign({},state,{reviews})
    //Default
    default:
      return state
  }
}