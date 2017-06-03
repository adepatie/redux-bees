import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import {
  reducer as beesReducer,
  middleware as beesMiddleware,
} from 'redux-bees';

const reducer = combineReducers({
  bees: beesReducer,
});

export default createStore(
  reducer,
  applyMiddleware(beesMiddleware())
);

