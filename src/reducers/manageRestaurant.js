
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
  },
  action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {...state, restaurants: [...state.restaurants, {
        text: action.text,
        id: cuidFn()
      }
      ]};
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)};
    case 'UPDATE_RESTAURANT':
    return state;
    case 'ADD_REVIEW':
      return {...state, reviews: [...state.reviews, {
        text: action.review.text,
        id: cuidFn(),
        restaurantId: action.review.restaurantId 
      }
      ]};
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(rev => rev.id !== action.id)};
    default:
    return state;
  }

};
