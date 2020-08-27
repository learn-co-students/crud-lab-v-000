// Note: This can be refactored with combineReducers.
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  // console.log(action);
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { text: action.text, id: cuid() }
        ],
        reviews: [...state.reviews]
      };
    
    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(rest => rest.id !== action.id),
        reviews: [...state.reviews]
      }

    case 'ADD_REVIEW':
      return {
        ...state,
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews,
          { text: action.text, restaurantId: action.restaurantId, id: cuid() }
        ]
      }

    default: return state;
  }
}
