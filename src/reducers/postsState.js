import { 
  SET_POSTS_FETCHING, 
  LOAD_POSTS,
  VALIDATE_POSTS,
  INVALIDATE_POSTS,  
} from '../actions/actionTypes'

export default (postsState = {posts: [], didInvalidate: true, isFetching: false}, action) => {
  console.log('after defaults set')
  console.log(postsState)
  console.log({...postsState})
  switch (action.type) {
    /*
    case ADD_POST:
      return [
        ...posts,
        {
          ...action.post,
          id: id++,
        },
      ]
    case TOGGLE_FAVORITE:
      return posts.map(post => {
        if (post.id === action.id)
          return {...post, favorited: !post.favorited}
        else
          return {...post}
        })
    */
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
