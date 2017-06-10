import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = Object.assign({}, action.restaurant, { id: cuid() })
            return { restaurants: state.restaurants.concat(restaurant) }
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id );
            return {restaurants};
        default:
            return state;
    }
};