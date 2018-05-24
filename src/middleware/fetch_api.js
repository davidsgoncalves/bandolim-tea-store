import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import store from '../storesConfig';

export default (path, options = {}) => {
  if (!path) {
    throw new Error('API request endpoint is required.');
  }

  const endpoint = `https://bandolim-api-mock.herokuapp.com/api/v1/${path}`;

  const fetchOptions = _.merge({}, options, {
    method: options.method || 'GET',
    headers: new Headers({
      "Authorization": "Token Bandolim@M821912212ejadsa@023",
    }),
  });

  store.dispatch({ type: 'RESET_RESPONSES' });

  return (
    fetch(endpoint, fetchOptions)
      .then((response) => {
        store.dispatch({ type: 'SET_STATUS', status: response.status });
        return response.json();
      })
      .then((response) => {
        const httpStatus = store.getState().response.toJS().status;

        if (httpStatus >= 200 && httpStatus < 300) {
          return response;
        }

        const error = new Error(response.message || httpStatus);
        error.response = response;
        return Promise.reject(error);
      })
  );
};
