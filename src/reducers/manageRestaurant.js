
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
    let restaurant = {id: cuid(), text: action.text}
    return { ...state, restaurants: [...state.restaurants, restaurant] }


    case 'DELETE_RESTAURANT':
    return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
    let review = {id: cuid(), restaurantId: action.review.restaurantId, text: action.review.text}
    return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
    const reviews = state.reviews.filter(review => review.id !== action.id);
    return {...state, reviews }



  default:
    return state;
  };
}
