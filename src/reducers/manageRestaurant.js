import cuid from "cuid";
export const cuidFn = cuid;

const initialState = { reviews: [], restaurants: [] };

export default function manageRestaurants(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT": {
      const restaurant = { ...action.restaurant, id: cuidFn() };
      return { ...state, restaurants: state.restaurants.concat(restaurant) };
    }
    case "DELETE_RESTAURANT": {
      return {
        ...state,
        restaurants: state.restaurants.filter(({ id }) => id !== action.id),
      };
    }
    case "ADD_REVIEW": {
      const review = { ...action.review, id: cuidFn() };
      return { ...state, reviews: state.reviews.concat(review) };
    }
    case "DELETE_REVIEW": {
      return {
        ...state,
        reviews: state.reviews.filter(({ id }) => id !== action.id),
      };
    }
    default:
      return state;
  }
}
