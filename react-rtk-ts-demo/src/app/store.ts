import thunkMiddleware from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import basketReducer from '../features/basket/basketSlice.js';

import cakeReducer from '../features/cake/cakeSlice.js';

import iceCreamReducer from '../features/icecream/iceCreamSlice.js';

import userReducer from '../features/user/userSlice.js';

const logger = createLogger();

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  basket: basketReducer,
});

const store = configureStore({
  reducer: rootReducers,
  // middleware: (getMiddleware) => getMiddleware().concat(logger),
  // middleware: [thunkMiddleware],
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
