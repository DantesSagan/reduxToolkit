import confStore from '@reduxjs/toolkit';
import crtLogger from 'redux-logger';

import { cakeReducer } from '../features/cake/cakeSlice.js';

import { iceCreamReducer } from '../features/icecream/iceCreamSlice.js';

const { configureStore, combineReducers } = confStore;
const { createLogger } = crtLogger;

const logger = createLogger();

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getMiddleware) => getMiddleware().concat(logger),
});
