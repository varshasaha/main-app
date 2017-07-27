import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import appReducers from './reducers';

const middlewares = [thunk];

if (__DEV__) {
  const logger = require('redux-logger');
  middlewares.push(logger.createLogger());
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// a util which converts a reducer function to an object
const getReducers = reducers => {
  if (typeof reducers === 'function') {
    return { [reducers.name]: reducers };
  }

  return reducers;
};

// export a function which takes in client reducers,
// and combines them with app reducers and creates a store.
const create = clientReducers =>
  createStoreWithMiddleware(
    combineReducers({
      ...getReducers(appReducers),
      clientState: combineReducers(getReducers(clientReducers)),
    }),
  );

export default create;
