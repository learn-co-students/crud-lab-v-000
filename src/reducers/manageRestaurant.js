
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      let id = cuid();
      let restaurant = Object.assign({}, action.restaurant, {id: id});
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)});

    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(shop => shop.id !== action.id)
      return Object.assign({}, state, {restaurants: restaurants});

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuidFn() }, {restaurantId: action.id});
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review),
      });

    case 'DELETE_REVIEW':
       const reviews = state.reviews.filter(review => review.id !== action.id);
       return Object.assign({}, state, { reviews: reviews });

    default:
      return state;
  }

}
