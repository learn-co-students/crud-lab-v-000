
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type){
    case 'ADD_RESTAURANT':
      let restaurant = Object.assign({}, action.restaurant, {id:cuid()});
      return {
        restaurants: state.restaurants.concat(restaurant),
        reviews: state.reviews
      };
    case 'DELETE_RESTAURANT':
      return {
        restaurants: state.restaurants.filter((restaurant)=>{
          return restaurant.id !== action.id;
        }),
        reviews: state.reviews
      };
    case 'ADD_REVIEW':
      let review = Object.assign({}, action.review, {id:cuid()});
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.concat(review),
      };
    case 'DELETE_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.filter((review)=>{
          return review.id !== action.id;
        })
      };
    default:
      return state;
  }
}
