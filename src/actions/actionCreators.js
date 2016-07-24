import { ADD_POST } from './actionTypes'

export const addPost = (title, body, favorited = false) => {
  return {
    type: ADD_POST,
    title,
    body,
    favorited,
  }
}
