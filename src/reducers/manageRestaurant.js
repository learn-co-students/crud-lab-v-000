import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type){
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return {restaurants: state.restaurants.concat(restaurant), reviews: state.reviews}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter( (restaurant) => restaurant.id !== action.id )
      const restaurant_reviews = state.reviews.filter( (review) => review.restaurantId !== action.id)

      return {restaurants: restaurants, reviews: restaurant_reviews}
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {review_id: cuid()});
      return {restaurants: state.restaurants, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      const updated_reviews = state.reviews.filter((review)=> review.review_id !== action.id)
      return {restaurants: state.restaurants, reviews: updated_reviews}
    default:
      return state;
  }
}
