
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  reviews: [],
  restaurants:[]
}, action) {
  // console.log(action)
  // console.log(state)
  switch (action.type){
    case 'ADD_RESTAURANT':
      const restaurant = {id: cuid(), text: action.text}
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(r => r.id !== action.id)}

    case 'ADD_REVIEW':
      const review = {id: cuid(), ...action.revObj}
      return {...state, reviews: [...state.reviews, review]}

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(r => r.id !== action.id)}
    default:
      return state
  }

}
