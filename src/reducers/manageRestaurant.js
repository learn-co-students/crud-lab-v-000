
import cuid from 'cuid';
export const cuidFn = cuid;


let id = 0;
export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  let restaurants;
  switch(action.type){
    case 'ADD_RESTAURANT':
      id++
      restaurants = [...state.restaurants, {text: action.text, id: id}]
      return { restaurants }

    case 'DELETE_RESTAURANT':
      restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id)
      return { restaurants }

    case 'ADD_REVIEW':
      let newState = {restaurants: state.restaurants, reviews: [...state.reviews, {text: action.text, restaurantId: action.restaurantId}]}
      let reviews = [...state.reviews, {text: action.text, restaurantId: action.restaurantId}]
      return newState


    default:
      return state
  }

}
