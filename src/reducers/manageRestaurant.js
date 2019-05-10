export default function manageRestaurants(state=[], action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return [...state, action.restaurant]
        
        case 'REMOVE_RESTAURANT':
            return state.filter( rest => rest.id !== action.id);
        
        default: 
            return state
    }
}
