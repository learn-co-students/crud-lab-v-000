import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch(action.type){

    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuid() }
      return {
        ...state,
        // more succint: restaurants: [ ...state.restaurants, restaurant]
        restaurants: [...state.restaurants.concat(restaurant)]
      }

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: [...state.restaurants.filter(rest => rest.id !== action.id)]
        // or could do
        // const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
        // return { ...state, restaurants}
      }

    case "ADD_REVIEW":
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }
      return { ...state, reviews: [ ...state.reviews.concat(review)]}

    case "DELETE_REVIEW":
      return { ...state, reviews: [ ...state.reviews.filter(review => review.id !== action.reviewId)]}
      // or could do
      // const reviews = state.reviews.filter(review => review.id !== action.id);
      // return {...state, reviews }

    default:
      return state
  }
}

// For simplicity with testing, restaurant data stored in Redux should have text and id keys.
// Since you'll need to be able to associate reviews to restaurants, and delete specific
// reviews, reviews stored in Redux should have a text key for the review content, a restaurantId
// key to associate and display the review with a specific restaurant and an id key unique to
// the review itself.
