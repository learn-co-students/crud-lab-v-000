
import cuid from 'cuid';
export const cuidFn = cuid;


let restaurantId = 0;
let reviewId = 0;
export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  let restaurants;
  let reviews;
  let newState;
  switch(action.type){
    case 'ADD_RESTAURANT':
      restaurantId++
      restaurants = [...state.restaurants, {text: action.text, id: restaurantId}];
      newState = {restaurants: restaurants, reviews: state.reviews};
      return newState;

    case 'DELETE_RESTAURANT':
      restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id)
      newState = {restaurants: restaurants, reviews: state.reviews}
      return newState;

    case 'ADD_REVIEW':
      reviewId++
      reviews = [...state.reviews, {text: action.text, id: reviewId, restaurantId: action.restaurantId}];
      newState = {restaurants: state.restaurants, reviews: reviews};
      return newState;

    case 'DELETE_REVIEW':
    debugger;
      reviews = state.reviews.filter(review => review.id !== action.id)
      newState = {restaurants: state.restaurants, reviews: reviews}
      return newState;

    default:
      return state
  }

}
