
export const addRestaurant = (text) => {
  return {
    type: 'ADD_RESTAURANT',
    text
  }
}

export const deleteRestaurant = (id) => {
  return {
    type: 'DELETE_RESTAURANT',
    id
  }
}

export const addReview = ({restaurantId, text}) => {
  return {
    type: 'ADD_REVIEW',
    restaurantId, text
  }
}

export const deleteReview = (id) => {
  return {
    type: 'DELETE_REVIEW',
    id
  }
}
