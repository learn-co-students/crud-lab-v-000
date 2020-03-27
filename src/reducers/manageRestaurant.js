
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    },
    action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            let newRestaurant = Object.assign({}, action.restaurant)
            newRestaurant.id = cuid()
            return {
                ...state,
                restaurants: state.restaurants.concat(newRestaurant)
            }

        case 'DELETE_RESTAURANT':
            console.log(action)
            return {
                ...state,
                restaurants: state.restaurants.filter(rest => rest.id !== action.restaurantID)
            }

        default:
            return state;
    }
}
