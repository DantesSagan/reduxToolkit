import React, { useCallback, useState } from 'react';
// import { useDispatch, useSelector, useStore } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { orderedCake, restockedCake } from '../cake/cakeSlice';
export default function CakeView() {
  const [value, setValue] = useState(0);

  const initNumOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const [first, setfirst] = useState(initNumOfCakes);
  console.log(first);

  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  console.log(numOfCakes);

  const dispatch = useAppDispatch();

  // const store = useStore();
  // store.subscribe(() =>
  //   console.log('update', store.getState().cake.numOfCakes)
  // );
  // console.log(store);

  // const changeOrdered = useCallback(() => {
  //   dispatch({ type: 'cake/orderedCake' });
  // }, []);

  return (
    <section className='border-2 border-white rounded-lg p-4'>
      <h2 className='text-3xl'>Number of cakes - {numOfCakes} </h2>
      <button
        onClick={() => dispatch(orderedCake())}
        className='mr-1 p-4 bg-green-700 rounded-lg border-2 border-white hover:bg-green-600'
      >
        Order cakes
      </button>
      <h2 className='text-2xl'>Custom restock</h2>
      <input
        className='text-black rounded-lg border-2 border-purple-600 p-2 focus:ring-yellow-600 focus:ring-4 mt-4 mb-4'
        value={value}
        type='number'
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <br />
      <button
        onClick={() => {
          dispatch(restockedCake(value));
        }}
        className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-white hover:bg-red-500'
      >
        Restock cakes
      </button>
      <h2 className='text-2xl'>Default restock</h2>
      <button
        onClick={() => {
          const diff = first - numOfCakes;
          dispatch(restockedCake(diff));
        }}
        className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-white hover:bg-red-500'
      >
        Default cakes
      </button>
    </section>
  );
}
