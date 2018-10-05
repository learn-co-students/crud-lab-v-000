import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  let restaurant, review

  switch (action.type) {
    case 'ADD_RESTAURANT':
      restaurant = {
        id: cuid(),
        text: action.restaurantText
      }
      return { ...state, restaurants: state.restaurants.concat(restaurant) }
    
    case 'UPDATE_RESTAURANT':
      restaurant = {
        id: action.restaurant.id,
        text: action.restaurant.text
      }
      const restaurants = state.restaurants.map(r => 
        r.id === restaurant.id ? restaurant : r
      )
      return { ...state, restaurants: restaurants }

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

    case 'ADD_REVIEW':
      review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return { ...state, reviews: state.reviews.concat(review)}

    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

    default:
      return state;
  }
}
