
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {restaurants: state.restaurants.concat(action.restaurant)};
        case 'DELETE_RESTAURANT':
            return state;
        default:
            return state;
    }
}