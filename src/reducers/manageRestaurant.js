
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const r = Object.assign([], {text: action.restaurant.text, id: cuid()});
            var rest = state.restaurants;
            rest.push(r);
            return { restaurants: rest };
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return  { restaurants }
        default:
            return state;
    }
}