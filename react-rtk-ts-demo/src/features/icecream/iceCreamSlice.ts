import { orderedCake, restockedCake } from '../cake/cakeSlice.js';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    orderedIceCream(state) {
      state.numOfIceCreams--;
    },
    restockedIceCream(state, action: PayloadAction<number>) {
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
  // extraReducers: (builder) => {
  //   builder.addCase(orderedCake, (state) => {
  //     state.numOfIceCreams--;
  //   });
  //   builder.addCase(restockedCake, (state) => {
  //     state.numOfIceCreams;
  //   });
  // },
});

export default iceCreamSlice.reducer;
export const { orderedIceCream, restockedIceCream } = iceCreamSlice.actions;
