import { 
  SET_POSTS_FETCHING, 
  LOAD_POSTS,
  VALIDATE_POSTS,
  INVALIDATE_POSTS,  
  LOAD_POST,
} from '../actions/actionTypes'

export default (
    postsState = 
      {
        posts: [], 
        fullPosts: {},
        didInvalidate: true, 
        isFetching: false
      }, action) => {
  console.log('after defaults set')
  console.log(postsState)
  console.log({...postsState})
  switch (action.type) {
    case LOAD_POST: 
      return {
        ...postsState,
        fullPosts: {
          ...postsState.fullPosts,
          [action.post.id]: action.post,
        }
      }
    case SET_POSTS_FETCHING:
      return {
        ...postsState,
        isFetching: action.isFetching,
      }

    case LOAD_POSTS:
      if(postsState.didInvalidate){
        return {
          ...postsState,
          posts: action.posts || [],
          didInvalidate: false,
        }
      }else{
        return postsState
      }
    case VALIDATE_POSTS:
      return {
        ...postsState,
        didInvalidate: false,
      }
    case INVALIDATE_POSTS:
      return {
        ...postsState,
        didInvalidate: true,
      }
    default:
      console.log(
        `action type ${action.type} 
        not handledin the reducer`
      )
      return postsState
    }
};
