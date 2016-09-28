import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './App.js.jsx';
import './index.css';
import ideaReducer from './reducer'
const store = createStore(ideaReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
