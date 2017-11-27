import { createStore } from 'redux';

import rootReducer from '../reducers/index';

const defaultState = {
  version: '0.0.1',
};

const store = createStore(rootReducer, defaultState);

export default store;
