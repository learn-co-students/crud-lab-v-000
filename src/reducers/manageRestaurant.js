import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { reviews: [], restaurants: [] }, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return {
        reviews: [...state.reviews],
        restaurants: [ ...state.restaurants, { ...action.restaurant, id: cuidFn() } ]
      };
    case 'DELETE_RESTAURANT':
      return {
        reviews: [...state.reviews],
        restaurants: [ ...state.restaurants.filter( restaurant => restaurant.id !== action.id )]
      };
    case 'ADD_REVIEW':
      return {
        restaurants: [...state.restaurants],
        reviews: [ ...state.reviews, { ...action.review, id: cuidFn() } ]
      };
    case 'DELETE_REVIEW':
      return {
        restaurants: [...state.restaurants],
        reviews: [ ...state.reviews.filter( review => review.id !== action.id ) ]
      };
    default:
      return state;
  }
}