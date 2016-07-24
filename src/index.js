import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './css/index.css';
import { createStore } from 'redux'
import reducer from './reducers'
import { addPost } from './actions/actionCreators'

let store = createStore(reducer)


store.subscribe(() => console.log(store.getState()))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))
store.dispatch(addPost('title', 'body'))


render(
  <App />,
  document.getElementById('root')
);
