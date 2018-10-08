
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    // debugger;
    switch (action.type) {
        case "ADD_RESTAURANT":
            const resaurant = {id: cuid(), text: action.text}
            return {...state, restaurants: [...state.restaurants, resaurant]}
        case "DELETE_RESTAURANT":
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurant.id)}
            
    
        default:
            return state
    }
}
