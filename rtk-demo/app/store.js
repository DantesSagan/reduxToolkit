import confStore from '@reduxjs/toolkit';
import { cakeReducer } from '../features/cake/cakeSlice.js';

import { iceCreamReducer } from '../features/icecream/iceCreamSlice.js';

const { configureStore, combineReducers } = confStore;

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export const store = configureStore({ reducer: rootReducers });
