
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {restaurants: state.restaurants.concat({
                ...action.restaurant,
                id: cuid(), 
            }
                )};
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id )
            return {restaurants: restaurants};
        default:
            return state;
    }
}