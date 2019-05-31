export const addRestaurant = (text) => {
  return { type: 'ADD_RESTAURANT', text }
}


export const removeRestaurant = (restaurantId) => {
  return { type: 'DELETE_RESTAURANT', id: restaurantId }
}
