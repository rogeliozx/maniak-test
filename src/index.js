import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware,compose  } from 'redux';
import ReduxThunk from 'redux-thunk';
import routesReducer from './stores/reducers/routes';
import pageReducer from './stores/reducers/pages';
import * as services from './services';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  routes:routesReducer,
  page:pageReducer
});
const store = createStore(rootReducer,compose(
  applyMiddleware(ReduxThunk.withExtraArgument(services)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
