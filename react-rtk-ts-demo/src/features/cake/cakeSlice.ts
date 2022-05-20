import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderedCake(state) {
      state.numOfCakes--;
    },
    restockedCake(state, action: PayloadAction<number>) {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderedCake, restockedCake } = cakeSlice.actions;
