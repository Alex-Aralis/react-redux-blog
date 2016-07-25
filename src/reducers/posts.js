import { ADD_POST, TOGGLE_FAVORITE } from '../actions/actionTypes'

let id = 0;

export default (posts = [], action) => {
  switch (action.type) {
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
    default:
      console.log(
        `action type ${action.type} 
        not handledin the reducer`
      )
      return posts
    }
};
