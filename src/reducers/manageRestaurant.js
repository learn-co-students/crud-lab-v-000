import cuid from 'cuid';
export const cuidFn = cuid;

/*
state: {
    restaurants: [ { text: 'restaurant text',
                     id: 3},
                ...],
    reviews: [ { text: 'review text',
                id: 1,
                restaurantId: 3 },
             ...]
  }
*/


export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, { id: cuid() });
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)});

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, {restaurants: restaurants});

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { restaurantId: action.restaurantId }, { id: cuid() });
      return Object.assign({}, state, {reviews: state.reviews.concat(review)});

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews: reviews});

    default:
      return state;
  }
}
