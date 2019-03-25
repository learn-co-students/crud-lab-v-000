
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews:[]}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
    const restaurant = { text: action.text, id: cuidFn() };
    //console.log("reducer add", state, action, restaurant)
    return{
      ...state, restaurants: [...state.restaurants, restaurant]
    }
    case "DELETE_RESTAURANT":
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
    return { ...state, restaurants}

    case "ADD_REVIEW":
    const review = { text: action.review.text, id: cuidFn(), restaurantId: action.review.restaurantId };
    console.log("reducer add", action, review)
    return{
      ...state, reviews: [...state.reviews, review]
    }

    case "DELETE_REVIEW":
    const reviews = state.reviews.filter(rev => rev.id !== action.id);
    return {...state, reviews}

      default: return state

  }

}
