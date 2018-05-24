import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducerCombiner';

export const history = createHistory();
const routeHistory = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  applyMiddleware(routeHistory),
);

export default store;
