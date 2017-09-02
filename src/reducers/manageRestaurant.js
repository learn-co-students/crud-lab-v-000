
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type) {

    case 'ADD_RESTAURANT': {
      let restaurant = Object.assign({}, action.restaurant, { id: cuid() });
      let restaurants = state.restaurants.concat(restaurant);
      return { ...state, restaurants: restaurants }
    }
    case 'DELETE_RESTAURANT': {
      let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {...state, restaurants: restaurants}
    }

    case 'ADD_REVIEW': {
      let review = Object.assign({}, action.review, { id: cuid() });
      let reviews = state.reviews.concat(review)
      return { ...state, reviews: reviews }
    }
    case 'DELETE_REVIEW': {
      let reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews: reviews }
    }

    default:
      return state;
  }
};
