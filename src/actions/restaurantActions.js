export const addRestaurant = restaurant => ({
  type: "ADD_RESTAURANT",
  text: restaurant.text
});

export const deleteRestaurant = restaurant => ({
  type: "DELETE_RESTAURANT",
  id: restaurant.id
});
