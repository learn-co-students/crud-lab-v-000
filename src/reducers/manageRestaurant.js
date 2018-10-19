
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(
    state = { restaurants:[]}, 
    action) 
{
    console.log("manageRestaurant", action);
    switch (action.type) {
        case "ADD_RESTAURANT":
            let newRestaurant = Object.assign({}, action.restaurant)
            newRestaurant.id = cuid();
            console.log("Adding Restaurant, new state",state.restaurants.concat(newRestaurant) );
            return { ...state, restaurants: state.restaurants.concat(newRestaurant) };

        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id)}
                     
        default:
            return state;
    }
}



