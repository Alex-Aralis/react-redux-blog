import { ADD_POST, TOGGLE_FAVORITE } from './actionTypes'

export const addPost = (title, body, favorited = false) => {
  return {
    type: ADD_POST,
    post: {
      title,
      body,
      favorited,
    }
  }
}

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    id,
  }
}
