import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions/actionTypes'

export default (
    snackbar = {
      action: 'default', 
      active: false, 
      onTimeout: () => {},
      onClick: () => {},
      content: 'default snackbar content',
    }, 
    action
  ) => {

  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        active: true,
        action: action.action,
        onClick: action.onClick,
        onTimeout: action.onTimeout,
        content: action.content,
      }
    case HIDE_SNACKBAR:
      return {
        ...snackbar,
        active: false,
      }
    default:
      return snackbar;
  }

}
