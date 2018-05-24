import fetchApi from '../middleware/fetch_api';

export const ADD_TO_CART = 'ADD_TO_CART';
export const FETCH_TEAS = 'FETCH_TEAS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const ON_CLIENT_DATA_CHANGE = 'ON_CLIENT_DATA_CHANGE';

export const addToCart = (id, data) => dispatch => (
  dispatch({ type: ADD_TO_CART, id, data })
);

export const fetchTeas = () => dispatch => (
  fetchApi('available-teas')
    .then(response => dispatch({ type: FETCH_TEAS, data: response }))
);

export const changeFilter = (filter, value) => (dispatch) => {
  dispatch({ type: CHANGE_FILTER, filter, value })
};

export const onClientDataChange = (key, value) => (dispatch) => {
  dispatch({ type: ON_CLIENT_DATA_CHANGE, key, value })
};

export const finishShop = (teas, clientData) => () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      client: {
        name: clientData.name,
        email: clientData.email,
        country: clientData.country,
      },
      teas: Object.values(teas).map(tea => ({ id: tea.id, quantity: tea.quantity })),
    }),

  };
  fetchApi('send-order', options)
    .then(response => alert('Pedido efetuado com sucesso!'));
};
