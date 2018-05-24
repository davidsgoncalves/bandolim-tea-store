import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tea from './reducers/tea';
import response from './reducers/response';
// import response from './reducers/response';
// import login from './reducers/login';
// import user from './reducers/user';
// import creditCard from './reducers/creditCard';

const rootReducer = combineReducers({
  tea,
  response,
  router: routerReducer,
});

export default rootReducer;
