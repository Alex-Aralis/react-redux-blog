import { UPDATE_QUERY } from '../actions/actionTypes'

export default (query = '', action) => {
  switch(action.type){
    case UPDATE_QUERY:
      return action.query
    default:
      return query
  }
}
