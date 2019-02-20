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
    case "UPDATE_RESTAURANT":
      const updatedRestaurant = {
        id: action.restaurant.id,
        text: action.restaurant.text
      };
      return {
        ...state,
        restaurants: state.restaurants.map(restaurant =>
          restaurant.id === action.restaurant.id
            ? (restaurant = updatedRestaurant)
            : restaurant
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
    case "UPDATE_REVIEW":
      const updatedReview = {
        id: action.review.id,
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      // const reviewIndex = state.reviews.findIndex(
      //   review => review.id === action.review.id
      // );

      // const updatedReviews = state.reviews.map(review =>
      //   review.id === action.review.id
      //     ? (review = updatedReview)
      //     : (review = review)
      // );
      // console.log("updatedReviews=", updatedReviews);
      // console.log({ ...state, reviews: [...state.reviews, updatedReviews] });
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === action.review.id ? (review = updatedReview) : review
        )
      };
    // return {
    //   ...state,
    //   reviews: [...state.reviews, { [reviewIndex]: updatedReview }]
    // };

    // return { ...state, review: { [review.text]: updateReview } };
    // from Diego

    // state.reviews.splice(review, 1, updatedReview)
    // does not work

    // return {
    //   ...state.reviews.splice(review, 1, updatedReview)
    // };
    // does not work

    // return {
    //   ...state,
    //   reviews: [...state.reviews, [...state.reviews[review], updatedReview]]
    // };
    //doesnt work

    // return {
    //   ...state,
    //   reviews: [...state.reviews, updatedReview]
    // };
    // adds another review!

    // return {
    //   ...state,
    //   reviews: [review, updatedReview]
    // };
    // updated existing review, but deletes the rest

    default:
      return state;
  }
}
