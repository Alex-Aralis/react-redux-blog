require('script!../node_modules/react-mdl/extra/material.min.js')
require('style!css!../node_modules/react-mdl/extra/css/material.amber-green.min.css')

import { render } from 'react-dom';
import './css/index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import Main from './components/Main'
import Header from './components/Header'
import PostForm from './containers/PostForm'
import PostPageResolver from './containers/PostPageResolver'
import thunk from 'redux-thunk'

const startApp = (initialState = {}) => {

  let store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
    )
  // eslint-disable-next-line
  let unsubOne = store.subscribe(() => console.log(store.getState()))
  /*
  store.dispatch(addPost('title', 'body'))
  store.dispatch(addPost('tsdflkjdsflksd', 'body'))
  store.dispatch(addPost('title', 'body'))
  store.dispatch(addPost('title', 'body'))

  store.dispatch(toggleFavorite(2));
  store.dispatch(toggleFavorite(1));
  store.dispatch(toggleFavorite(2));
  store.dispatch(toggleFavorite(3));

  store.dispatch(toggleFavorite(3));
  */

  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
          <IndexRedirect to="/posts" />
          <Route path="/posts" component={Main} />
          <Route path="/new" component={PostForm} />
          <Route path="/posts/:id" component={PostPageResolver} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

startApp();
/*
fetch(`${API_BASE}/posts.json`)
  .then(res => {
    return res.json()
  })
  .then(json => {
    startApp({postsState: {posts: json}})
  })
*/
