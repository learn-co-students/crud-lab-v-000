import cuid from "cuid";
//export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT": {
      const newRestaurant = {
        id: cuid(),
        text: action.payload
      };
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      };
    }
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.payload
      );
      return {
        ...state,
        restaurants: [...restaurants]
      };
    case "ADD_REVIEW":
      const newReview = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      return {
        ...state,
        reviews: [...state.reviews, newReview]
      };
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {
        ...state,
        reviews: [...reviews]
      };
    default:
      return state;
  }
}
