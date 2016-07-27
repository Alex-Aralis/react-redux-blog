require('script!../node_modules/react-mdl/extra/material.min.js')
require('style!css!../node_modules/react-mdl/extra/css/material.amber-green.min.css')

import { render } from 'react-dom';
import './css/index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { addPost, toggleFavorite } from './actions/actionCreators'
import { Router, Route, hashHistory } from 'react-router'
import Main from './components/Main'
import Header from './components/Header'
import PostForm from './containers/PostForm'
import PostPageResolver from './containers/PostPageResolver'

let store = createStore(reducer)

// eslint-disable-next-line
let unsubOne = store.subscribe(() => console.log(store.getState()))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('tsdflkjdsflksd', 'body'))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))

store.dispatch(toggleFavorite(2));
store.dispatch(toggleFavorite(1));
store.dispatch(toggleFavorite(2));
store.dispatch(toggleFavorite(3));

store.dispatch(toggleFavorite(3));

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Header}>
        <Route path="/posts" component={Main} />
        <Route path="/new" component={PostForm} />
        <Route path="/posts/:id" component={PostPageResolver} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
