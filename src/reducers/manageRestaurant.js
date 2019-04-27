import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  let restaurant, restaurants, review, reviews;
  switch (action.type) {

    case 'ADD_RESTAURANT':
      restaurant = {
        text: action.text,
        id: cuidFn()
      };
      return { ...state, restaurants: [...state.restaurants, restaurant] };

    case 'DELETE_RESTAURANT':
      restaurants = state.restaurants.filter(resto => resto.id !== action.id )
      return { ...state, restaurants: restaurants };

    case 'ADD_REVIEW':
      restaurant = state.restaurants.filter(resto => resto.id !== action.id);
      review = {
        text: action.text,
        id: cuidFn(),
        restaurantId: restaurant[0].id
      };
      return { ...state, reviews: [...state.reviews, review] };

    case 'DELETE_REVIEW':
      reviews = state.reviews.filter(review => review.id !== action.id );
      return { ...state, reviews: reviews };

    default:
      return state;
  }
};
