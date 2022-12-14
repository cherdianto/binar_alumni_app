import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

