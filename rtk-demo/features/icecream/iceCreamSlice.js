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
});
export const iceCreamReducer = iceCreamSlice.reducer;
export const { orderedIceCream, restockedIceCream } = iceCreamSlice.actions;
