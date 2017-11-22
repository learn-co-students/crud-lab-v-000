
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
restaurants: []
}, action) {
  switch (action.type){
    
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, { id: cuidFn() })
      return { restaurants: state.restaurants.concat(restaurant) }
      
    case 'DELETE_RESTAURANT':
      const restaurants = { restaurants: state.restaurants.filter(r => r.id !== action.id)}
      return restaurants;

    // case 'ADD_REVIEW':
    //   const review = Object.assign({}, action.review, { id: cuidFn })
    //   return { reviews: state.reviews.concat(review) }
      
    // case 'DELETE_REVIEW':
    //   const reviews = state.reviews.filter(review => review.id !== action.id)
    //   return { reviews: state.reviews.concat(review) }

    default: 
      return state;
  }
}