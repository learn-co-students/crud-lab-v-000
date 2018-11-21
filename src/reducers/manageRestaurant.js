import uuid from "uuid";

const initialState = {
  restaurants: [],
  reviews:[]
}
const manageRestaurant = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
    const rest = {name: action.name, id: uuid()}
    return {
      ...state, restaurants: [...state.restaurants, rest]
    }
    case 'DELETE_RESTAURANT':
    let newArr = state.restaurants.filter(rest => rest.id !== action.id)
    return {
      restaurants: newArr
    }
    case 'ADD_REVIEW':
    const rev = {text: action.review.text, id: uuid(), restaurantId: action.review.restaurantId}
    return {
      ...state, reviews:[...state.reviews, rev]
    }
    case 'DELETE_REVIEW':
    let newRarr = state.reviews.filter(rev => rev.id !== action.id)
    return {
      ...state, reviews: newRarr
    }
    default:
    return state;
  }
}

export default manageRestaurant
