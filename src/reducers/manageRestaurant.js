import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text
      };

      return { restaurants: state.restaurants.concat(restaurant) };

    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.id
        )
      };

    case "ADD_REVIEW":
      debugger;
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };

      return { reviews: state.reviews.concat(review) };

    default:
      return state;
  }
}
