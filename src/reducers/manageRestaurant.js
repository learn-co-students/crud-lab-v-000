import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        restaurants: [...state.restaurants, {id: cuid(), text: action.text}],
        reviews: state.reviews
      };
    case 'DELETE_RESTAURANT':
      return {
        restaurants: state.restaurants.filter(rest => rest.id !== action.id),
        reviews: state.reviews.filter(rev => rev.restaurantId !== action.id)
      };
    case 'ADD_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: [...state.reviews, {restaurantId: action.restaurantId, id: cuid(), text: action.text}]
      };
    case 'DELETE_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.filter(rev => rev.id !== action.id)
      };
    default:
      return state;
  }
}
