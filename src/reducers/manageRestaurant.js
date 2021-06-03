import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
  }, action) {
      switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {text: action.text, id: cuid()};
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {...state, restaurants}

        case 'ADD_REVIEW':



        case 'DELETE REVIEW':

        

            default:
                return state;
      }

}
