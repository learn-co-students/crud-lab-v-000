import cuid from "cuid";

export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      };

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.id
      );
      return {
        ...state,
        restaurants
      };

    case "ADD_REVIEW":
      const review = {
        id: cuidFn(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };

      return { ...state, reviews: state.reviews.concat(review) };

    default:
      return state;
  }
}
