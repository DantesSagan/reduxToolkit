import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import crtLogger from 'redux-logger';

import cakeReducer from '../features/cake/cakeSlice.js';

import iceCreamReducer from '../features/icecream/iceCreamSlice.js';

import userReducer from '../features/user/userSlice.js';

// const { createLogger } = crtLogger;

// const logger = createLogger();

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducers,
  // middleware: (getMiddleware) => getMiddleware().concat(logger),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
