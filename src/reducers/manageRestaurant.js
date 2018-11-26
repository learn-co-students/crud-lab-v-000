import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
      restaurants: [],
      reviews: []},
  action) {

  switch(action.type){
    case 'ADD_RESTAURANT':
      const rest = {
          id: cuid(),
          text: action.text
        }
        return {...state, restaurants: [...state.restaurants, rest]}

     case 'DELETE_RESTAURANT':
        return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id),
        reviews: state.reviews.filter(review => review.restaurantId !== action.id)}

     case 'ADD_REVIEW':
    console.log(action)
      const review = {
          id: cuid(),
          restaurantId: action.review.restaurantId,
          text: action.review.text
        }
        return { ...state, reviews: [...state.reviews, review] }

     case 'DELETE_REVIEW':
        return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

     default:
        return state
  }
}
