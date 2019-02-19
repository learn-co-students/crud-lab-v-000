import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = {
        id: cuidFn(),
        text: action.text
      };
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      };
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.id
        )
      };
    case "ADD_REVIEW":
      const newReview = {
        id: cuidFn(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      return { ...state, reviews: [...state.reviews, newReview] };
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews };
    // case "UPDATE_REVIEW":
    //   return {
    //     reviews: state.reviews.map(review => review.id === action.id)
    //   };

    default:
      return state;
  }
}
