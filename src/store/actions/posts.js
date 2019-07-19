import { ADD_POST, SELECTED_PHOTO } from './actionTypes'

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const selectedPhoto = photo => {
    return{
        type: SELECTED_PHOTO,
        payload: photo
    }
}
