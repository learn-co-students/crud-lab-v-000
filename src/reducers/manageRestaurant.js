import {combineReducers} from 'redux'
import cuid from 'cuid';
export const cuidFn = cuid;

const manageRestaurant = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer
})

function restaurantReducer(state = [], action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      const restau = {
        text: action.text,
        id: cuid()
      }
      return [...state, restau]
    case "DELETE_RESTAURANT":
      return state.filter(restau => restau.id !==action.id)
    default:
      return state
  }
}

function reviewReducer(state = [], action) {

  switch(action.type) {
    case "ADD_REVIEW":
      const review= {
        text: action.review.text,
        restaurantId : action.review.restaurantId,
        id: cuid()
      }
      return [...state, review]
    case "DELETE_REVIEW":
      debugger
      return state.filter(review=> review.id !==action.id)
    default:
      return state
  }
}

export default manageRestaurant
