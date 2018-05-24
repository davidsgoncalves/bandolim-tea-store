import Immutable from 'immutable'

import { ADD_TO_CART, FETCH_TEAS, CHANGE_FILTER, ON_CLIENT_DATA_CHANGE } from "../actions/tea";

const DEFAULT_STATE = Immutable.fromJS({
  teas: [],
  selectedTeas: {},
  filters: {
    night: false,
    meal: false,
    medicinal: false,
    digestion: false
  },
  client: {
    name: '',
    email: '',
    country: "Brazil"
  }
});

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.updateIn(['selectedTeas'], column => Immutable.fromJS(column).set(action.id, action.data));
    case FETCH_TEAS:
      return state.set('teas', action.data);
    case CHANGE_FILTER:
      return state.setIn(['filters', action.filter], action.value);
    case ON_CLIENT_DATA_CHANGE:
      return state.updateIn(['client'], column => Immutable.fromJS(column).set(action.key, action.value));
    default:
      return state;
  }
}


