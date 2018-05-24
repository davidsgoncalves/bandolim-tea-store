import Immutable from 'immutable';
import { SET_STATUS, SET_MESSAGES, RESET_RESPONSES } from '../actions/response';

const DEFAULT_STATE = Immutable.fromJS({
  status: null
});

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET_STATUS:
      return state.set('status', action.status.toString());
    case RESET_RESPONSES:
    default:
      return state;
  }
};
