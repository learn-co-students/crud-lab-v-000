import cuid from 'cuid';

export default function restaurantReducer(state = [], action) {
    //console.log(state)
    //console.log(action)
    switch(action.type) {
        case 'ADD_RESTAURANT':
            let restaurant = {
                id: cuid(),
                text: action.text
            }
            console.log(restaurant);
            return [...state, restaurant];
        case 'DELETE_RESTAURANT':
            return state.filter(restaurant => restaurant.id !== action.id);
        default:
            return state;
    }

};
