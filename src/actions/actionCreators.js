export function addReview(restaurantId, text) {
  return {
    type: 'ADD_REVIEW',
    restaurantId,
    text
  }
}

