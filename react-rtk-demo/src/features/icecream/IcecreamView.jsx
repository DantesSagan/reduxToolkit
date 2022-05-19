import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { orderedIceCream, restockedIceCream } from './iceCreamSlice';

export default function IceCreamView() {
  const [value, setValue] = useState(0);

  const initNumOfIceCreams = useSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const [first, setfirst] = useState(initNumOfIceCreams);
  console.log(first);

  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  console.log(numOfIceCreams);

  const dispatch = useDispatch();
  const store = useStore();
  store.subscribe(() =>
    console.log('update', store.getState().iceCream.numOfIceCreams)
  );
  console.log(store);

  return (
    <section className='border-2 border-white rounded-lg p-4'>
      <h2 className='text-3xl'>Number of ice creams - {numOfIceCreams} </h2>
      <button
        onClick={() => dispatch(orderedIceCream())}
        className='mr-1 p-4 bg-green-700 rounded-lg border-2 border-white hover:bg-green-600'
      >
        Order ice creams
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
          dispatch(restockedIceCream(value));
        }}
        className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-white hover:bg-red-500'
      >
        Restock ice creams
      </button>
      <h2 className='text-2xl'>Default restock</h2>
      <button
        onClick={() => {
          const diff = first - numOfIceCreams;
          dispatch(restockedIceCream(diff));
        }}
        className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-white hover:bg-red-500'
      >
        Default ice creams
      </button>
    </section>
  );
}
