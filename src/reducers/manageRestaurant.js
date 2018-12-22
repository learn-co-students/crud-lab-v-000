
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":

            const restaurant = {
                id: cuid(),
                text: action.text
            }
        return { ...state, restaurants:         [...state.restaurants, restaurant] 
        }

        case "DELETE_RESTAURANT":
            
            return { ...state, restaurants: state.restaurants.filter(
                restaurant => restaurant.id !== action.id )}

        case "ADD_REVIEW":
        console.log(action);

        case "DELETE_REVIEW":
        console.log(action);

        default:
            return state;
    }

}
