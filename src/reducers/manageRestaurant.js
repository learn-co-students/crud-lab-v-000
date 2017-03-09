import cuid from 'cuid';
export const cuidFn = cuid
export default function manageRestaurants(state = {
  reviews: [], restaurants: []
}, action){
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, {text: action.text, id: cuidFn()})
      return Object.assign({}, state, { restaurants: [...state.restaurants, newRestaurant] })
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, {restaurants})
    case 'ADD_REVIEW':
    console.log(action)
      const review = Object.assign({}, action.review , {id: cuidFn()})
      return Object.assign({}, state, { reviews: [...state.reviews, review] })
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      console.log(action.id)
      console.log(Object.assign({}, state, {reviews}))
      return Object.assign({}, state, {reviews})
    default:
      return state
  }
}
