import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch(action.type){
    
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuid() }
      return {
        ...state,
        restaurants: [...state.restaurants.concat(restaurant)]
      }

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: [...state.restaurants.filter(rest => rest.id !== action.id)]
      }

    case "ADD_REVIEW":
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }
      return { ...state, reviews: [ ...state.reviews.concat(review)]}

    case "DELETE_REVIEW":
      return { ...state, reviews: [ ...state.reviews.filter(review => review.id !== action.reviewId)]}

    default:
      return state
  }
}

// For simplicity with testing, restaurant data stored in Redux should have text and id keys.
// Since you'll need to be able to associate reviews to restaurants, and delete specific
// reviews, reviews stored in Redux should have a text key for the review content, a restaurantId
// key to associate and display the review with a specific restaurant and an id key unique to
// the review itself.
