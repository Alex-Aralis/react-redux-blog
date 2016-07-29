import { combineReducers } from 'redux'
import posts from './posts'
import query from './query'
import snackbar from './snackbar'

export default combineReducers({
  snackbar,
  posts,
  query,
});
