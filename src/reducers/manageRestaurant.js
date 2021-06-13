import cuid from 'cuid';
import manageReviews from './manageReviews';
import {combineReducers} from 'redux'
function manageRestaurants(state=[], action) {
  console.log(`Called ${action.type} with`, action);
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [...state, {text: action.text, id: cuid()}]
    case "DELETE_RESTAURANT":
      return state.filter(r=> r.id !== action.id)
    default:
      return state
  }
}
export default combineReducers({ restaurants: manageRestaurants, reviews: manageReviews })