import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReview(state = [], action) {
    switch(action.type){
        case 'ADD_REVIEW':
            return [...state, {text: action.text, id: cuid(), restaurantId: action.restaurantId}]

      case 'DELETE_REVIEW':
        //   return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }
        return state;

        default:
            return state;
    }
}