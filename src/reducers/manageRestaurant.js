
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      console.log("restaurant: ")
      console.log(restaurant)
      console.log("restaurants: ")
      console.log([...state.restaurants, restaurant])
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case "DELETE_RESTAURANT":
      console.log("Deleting restaurant "+action.id);
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      console.log("restaurants: ")
      console.log(restaurants);
      return {...state, restaurants}
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      console.log("review: ")
      console.log(review);
      console.log("reviews: ")
      console.log([...state.reviews, review]);
      return { ...state, reviews: [...state.reviews, review] }
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== review.id)
      return {...state, reviews}
    default:
      return state;
  }
}
