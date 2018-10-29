import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
		restaurants: [],
    reviews: [] 
}, action) {
switch(action.type) {
	case 'ADD_RESTAURANT':
		  const restaurant = { id: cuidFn(), text: action.text}
		  return { ...state, restaurants: [...state.restaurants, restaurant], reviews: state.reviews}

	case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants, reviews: state.reviews };

  case 'ADD_REVIEW':
      const review = { id: cuidFn(), text: action.text}
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return { ...state, reviews }


    default:
      return state;
  }
}


