import { 
  SET_POSTS_FETCHING, 
  LOAD_POSTS, 
  SHOW_SNACKBAR, 
  POST_POSTED, 
  POST_REJECTED, 
  ADD_POST, 
  TOGGLE_FAVORITE, 
  UPDATE_QUERY,
  INVALIDATE_POSTS,
  VALIDATE_POSTS,
  LOAD_POST,
} from './actionTypes'
import { API_BASE } from '../constants'

export const invalidatePosts = () => {
  return {
    type: INVALIDATE_POSTS,
  }
}

export const validatePosts = () => {
  return {
    type: VALIDATE_POSTS,
  }
}

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

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts: posts,
  }
}

export const loadPost = (post) => {
  return {
    type: LOAD_POST,
    post: post,
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
export const setPostsFetching = (isFetching) => {
  return {
    type: SET_POSTS_FETCHING,
    isFetching,
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
        dispatch(invalidatePosts())
        return res.json()
      })
    }
}

export const getPost = (id) => {
  return (dispatch) => {
    return fetch(`${API_BASE}/posts/${id}.json`)
      .then((res) => {
        return res.json()
      })
  }
}

export const getPosts = () => {
  return dispatch => {
    dispatch(setPostsFetching(true))

    return fetch(`${API_BASE}/posts.json`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log(json)
        dispatch(loadPosts(json))
        dispatch(setPostsFetching(false))
        dispatch(validatePosts)

        return json
      })  
  }
}
