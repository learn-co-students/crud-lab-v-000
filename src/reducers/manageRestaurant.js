
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = 
  {restaurants: [], reviews: [] 
  }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT': 
      const restaurant = {text: action.restaurant.text, id: cuid()}
      return {restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT': 
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}

    case 'ADD_REVIEW':
      const review = {...action.review, id: cuid()}
      return {...state, reviews: state.reviews.concat(review)}

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {reviews}

    default: 
      return state
  }

}


// case 'ADD_REVIEW':
//       const review = Object.assign({}, action.review, {id:cuidFn()});
//       return {...state, reviews: state.reviews.concat(review)}


// case 'ADD_REVIEW':
//       const review = Object.assign({}, action.review, { id: cuidFn() });
//       return Object.assign({}, state, {
//         reviews: state.reviews.concat(review),
//       });
