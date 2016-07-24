import { ADD_POST, TOGGLE_FAV } from '../actions/actionTypes'

let id = 0;

export default (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...posts,
        {
          id: id++,
          title: action.title,
          body: action.body,
        },
      ]
    case TOGGLE_FAV:
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
