import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type){

    case 'ADD_RESTAURANT':
      let restaurants = [...state.restaurants, {text: action.text, id: cuidFn()}];
      return {...state, restaurants: restaurants};
    case 'DELETE_RESTAURANT':
      let deleteRestaurants = state.restaurants.filter((restaurant) => {return restaurant.id !== action.id});
      return {...state, restaurants: deleteRestaurants};
    case 'ADD_REVIEW':
      let reviews = [...state.reviews, {text: action.text, restaurantId: action.restaurantId, id: cuid()}]
      return {...state, reviews: reviews}
    case 'DELETE_REVIEW':
      let deleteReviews = state.reviews.filter((review) => {return review.id !== action.id});
      return {...state, reviews: deleteReviews};
    default:
      return state;
  }
}
