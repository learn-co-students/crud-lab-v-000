
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [],
reviews: []}, action) {

  switch(action.type){

    case 'ADD_RESTAURANT':
      const id = cuid();
      const restaurant = {...action.restaurant, id: id}
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id);
      return {...state, restaurants: restaurants};
    case 'ADD_REVIEW':
      const idReview = cuid();
      const review = {...action.review, restaurantId: action.restaurantId,
        id: idReview}
      return {...state, reviews: [...state.reviews, review]}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews: reviews}
    default:
      return state;

  }
}
