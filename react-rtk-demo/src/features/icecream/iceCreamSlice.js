import { orderedCake, restockedCake } from '../cake/cakeSlice.js';

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
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
    builder.addCase(restockedCake, (state) => {
      state.numOfIceCreams;
    });
  },
});

export default iceCreamSlice.reducer;
export const { orderedIceCream, restockedIceCream } = iceCreamSlice.actions;
