import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchAllUsers, fetchRepos, fetchUser } from './Reducers';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(
  combineReducers({ fetchAllUsers, fetchRepos, fetchUser }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
