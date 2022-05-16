import { orderedCake, restockedCake } from '../cake/cakeSlice.js';

import pkg from '@reduxjs/toolkit';

const { createSlice } = pkg;

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    orderedIceCream(state) {
      state.numOfIceCreams--;
    },
    restockedIceCream(state, action) {
      state.numOfIceCreams += action.payload;
    },
  },
  // extrasReducers
  // extraReducers: {
  //   ['cake/orderedCake']: (state) => {
  //     state.numOfIceCreams--;
  //   },
  // },
  // that allows create slice to reponse to other actions types
  // besides the types it has generated
  extraReducers: (builder) => {
    builder.addCase(orderedCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});
export const iceCreamReducer = iceCreamSlice.reducer;
export const { orderedIceCream, restockedIceCream } = iceCreamSlice.actions;
