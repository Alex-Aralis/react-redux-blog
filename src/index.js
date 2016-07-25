require('script!../node_modules/react-mdl/extra/material.min.js')
require('style!css!../node_modules/react-mdl/extra/css/material.amber-green.min.css')

import { render } from 'react-dom';
import App from './components/App';
import './css/index.css';
import { createStore } from 'redux'
import reducer from './reducers'
import { addPost, toggleFavorite } from './actions/actionCreators'

let store = createStore(reducer)

// eslint-disable-next-line
let unsubOne = store.subscribe(() => console.log(store.getState()))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))

store.dispatch(toggleFavorite(2));
store.dispatch(toggleFavorite(1));
store.dispatch(toggleFavorite(2));
store.dispatch(toggleFavorite(3));

store.dispatch(toggleFavorite(3));



render(
  <App />,
  document.getElementById('root')
);
