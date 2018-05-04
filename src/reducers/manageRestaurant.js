
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    switch (action.type) {
    case 'ADD_RESTAURANT':
      let id = cuid();    
      const restaurant = Object.assign({}, {id: id}, action.restaurant);
      return { restaurants: state.restaurants.concat(restaurant) };
      
    //  case 'DELETE_TODO':
    //   const todos = state.todos.filter(todo => todo.id !== action.id);
    //   return  { todos }
      
    default:
      return state;
  }
    
}