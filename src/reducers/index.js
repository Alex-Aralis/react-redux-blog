import { combineReducers } from 'redux'
import postsState from './postsState'
import query from './query'
import snackbar from './snackbar'

export default combineReducers({
  snackbar,
  postsState,
  query,
});
