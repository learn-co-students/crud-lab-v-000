import cuid from 'cuid';
import { combineReducers } from 'redux';
export const cuidFn = cuid;

const rootReducer = combineReducers({
  restaurants: manageRestaurants
})

export default rootReducer;

function manageRestaurants(state = [], action) {

  const restaurant = {
    id: cuid(),
    text: action.formData
  }

  switch (action.type) {

    case 'ADD_RESTAURANT':
      return [...state, restaurant]
    
    case 'DELETE_RESTAURANT':
      return state.filter(r => r.id !== action.formData)

    default:
      return state
    }
}
