import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[]}, action) {
  let updatedRestaurants
  let parent
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuid(), reviews: []} )
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { restaurants }
    case 'ADD_REVIEW':
      let newReview = action.review;
      parent = state.restaurants.find(restaurant => restaurant.id === newReview.restaurantId);
      newReview.id = cuid();
      parent.reviews.push(action.review);
      updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== parent.id);
      return { restaurants: updatedRestaurants.concat(parent) };
    case 'REMOVE_REVIEW':
      parent = state.restaurants.find(restaurant => restaurant.id === action.review.restaurantId);
      updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== parent.id);
      let reviews = parent.reviews.filter(review => review.id !== action.review.id)
      parent.reviews = reviews
      return {restaurants: updatedRestaurants.concat(parent)}
    default:
      return state
  }
}