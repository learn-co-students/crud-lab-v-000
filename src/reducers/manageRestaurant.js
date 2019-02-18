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
      // return { restaurants: state.restaurants.concat(newRestaurant) };
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      };

    case "DELETE_RESTAURANT":
      // const newRestaurants = state.restaurants.filter(
      //   restaurant => restaurant.id !== action.id
      // );
      // return { ...state, newRestaurants };
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
    // return { reviews: state.reviews.concat(newReview) };
    case "DELETE_REVIEW":
      return {
        reviews: state.reviews.filter(review => review.id !== action.id)
      };

    // case "UPDATE_RESTAURANT":
    //   return {
    //     restaurants: state.restaurants.filter(
    //       restaurant => restaurant.id !== action.id
    //     )
    //   };
    default:
      return state;
  }
}
