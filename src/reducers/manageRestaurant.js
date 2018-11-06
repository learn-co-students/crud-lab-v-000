import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [{id: 1, text: 'test'}],
  reviews: [{id: 1, restaurantId: 1, text: 'a review'}]
}, action) {
  console.log(state);
  console.log(action);

  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuid(),
        text: action.payload.text,
      };
      const newState = {...state,
        restaurants: [...state.restaurants, newRestaurant]
      };
      return newState;

    case 'DELETE_RESTAURANT':
      const newRestaurants = state.restaurants.filter(res => res.id !== action.payload);
      return {...state, restaurants: newRestaurants};

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        text: action.payload.text,
        restaurantId: action.payload.restaurantId
      };
      return {...state, reviews: [...state.reviews, newReview]};

    case 'DELETE_REVIEW':
      const reviewsAfterDeletion = state.reviews.filter(rev => rev.id !== action.payload);
      return {...state, reviews: reviewsAfterDeletion};

    default:
      return state;
  }
}
