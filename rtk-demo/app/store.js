import confStore from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice.js';

const { configureStore } = confStore;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
