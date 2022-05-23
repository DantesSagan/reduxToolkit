import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Cakes = {
  id: number;
  name: string;
  idCheck: number;
  price: number;
  description: string;
  flavour: string;
  color: string;
  numOfCakes: number;
  img?: string;
};

type InitialState = {
  loading: boolean;
  cakes: Cakes[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  cakes: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchCakes = createAsyncThunk('cakes/fetchCakes', async () => {
  return axios.get('http://localhost:4000/cakes').then((resposnse) =>
    resposnse.data.map((cakes: []) => {
      return cakes;
    })
  );
});

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderedCake(state) {
      state.cakes.map((cake) => {
        // if (cake.id === cake.idCheck) {
        // }
        cake.numOfCakes--;
        // cake.price += action.payload;
      });
    },

    restockedCake(state, action: PayloadAction<number>) {
      state.cakes.map((cake) => {
        cake.numOfCakes += action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    // pending - wait for incoming request
    builder.addCase(fetchCakes.pending, (state) => {
      state.loading = true;
    });
    // fulfilled - when request succeed
    builder.addCase(
      fetchCakes.fulfilled,
      (state, action: PayloadAction<Cakes[]>) => {
        state.loading = false;
        state.cakes = action.payload;
        state.error = '';
      }
    );
    // rejected - when request have an a error, when request failed
    builder.addCase(fetchCakes.rejected, (state, action) => {
      state.loading = false;
      state.cakes = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default cakeSlice.reducer;
export const { orderedCake, restockedCake } = cakeSlice.actions;
