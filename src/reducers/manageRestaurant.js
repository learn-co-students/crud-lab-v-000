
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = { restaurants: [], reviews: [] }

export default (state=initialState, action)=> {
  switch (action.type){
    case "ADD_RESTAURANT":
    // console.log("reducer add rest:", action.text)

      const restaurant = { id: cuidFn(), text: action.text}
        return { restaurants: state.restaurants.concat(restaurant) }

    case "DELETE_RESTAURANT":
      // console.log("reducer delete:", action.id)

        const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
          return {...state, restaurants}

    case "ADD_REVIEW":
    // console.log("rev add:", action)
    const review = { id: cuidFn(), text: action.review.text, restaurantId: action.review.restaurantId }
      return { ...state,
        reviews: [...state.reviews, review]}


    case "DELETE_REVIEW":
    const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}


    default:
      return state
  }
}
