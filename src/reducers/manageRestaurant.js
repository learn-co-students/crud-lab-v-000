import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, {text: action.restaurant}, {id: cuid()});
      return Object.assign(state, {restaurants: state.restaurants.concat(restaurant)});

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant) => {
        return restaurant.id !== action.id;
      });
      return Object.assign(state, {restaurants: restaurants});

    case 'ADD_REVIEW':
      const review = Object.assign({}, {text: action.review}, {id: cuid()}, {restaurantId: action.restaurantId});
      return Object.assign(state, {reviews: state.reviews.concat(review)});

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter((review) => {
        return review.id !== action.id;
      });
      return Object.assign(state, {reviews: reviews});

    default: 
      return state;
  }
} 