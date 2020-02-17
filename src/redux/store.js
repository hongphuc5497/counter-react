import { createStore } from 'redux';

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);

export default store;