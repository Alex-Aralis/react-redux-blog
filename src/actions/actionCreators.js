import { SHOW_SNACKBAR, POST_POSTED, POST_REJECTED, ADD_POST, TOGGLE_FAVORITE, UPDATE_QUERY } from './actionTypes'
import { API_BASE } from '../constants'

export const showSnackbar = snackbar => {
  return {
    ...snackbar,
    type: SHOW_SNACKBAR,
  }
}

export const postPosted = post => {
  return {
    type: POST_POSTED,
  }
}

export const postRejected = err => {
  return {
    type: POST_REJECTED,
  }
}

export const postPost = (post) => {
  console.log(post)
  return (dispatch) => {
      return fetch(`${API_BASE}/posts.json`, {
        method: 'post',
        body: JSON.stringify({post}),
        headers: {
          'content-type': 'application/json',
        }
      })
      .then((res) => {
        console.log(res)
        return res.json()
      })
    }
}

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

export const updateQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    query,
  }
}
