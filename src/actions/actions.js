export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        restaurant
    }
}
export const removeRestaurant = (id) => {
    return {
        type: 'REMOVE_RESTAURANT',
        id
    }
}
export const addReview = (review) => {
    return {
        type: 'ADD_REVIEW',
        review
    }
}
export const removeReview = (id) => {
    return {
        type: 'REMOVE_REVIEW',
        id
    }
}