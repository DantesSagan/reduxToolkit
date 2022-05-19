import React from 'react';
import { useSelector } from 'react-redux';

import { orderedCake, restockedCake } from '../cake/cakeSlice';
import store from '../../app/store';
export default function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  console.log(orderedCake, restockedCake, store.getState());

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={orderedCake}>Order cake</button>
      <button onClick={restockedCake}>Restock cakes </button>
    </div>
  );
}
