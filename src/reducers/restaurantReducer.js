import cuid from 'cuid';
export const cuidFn = cuid;

function restaurantReducer(state = [], action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                text: action.text,
                id: cuid()
            };
            return [...state, restaurant];

        case "DELETE_RESTAURANT":
            return [...state].filter(obj => obj.id !== action.restaurantID);
            
        default:
            return state;
    }
}

export default restaurantReducer;