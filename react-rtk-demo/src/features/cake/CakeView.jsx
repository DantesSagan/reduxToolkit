import React from 'react';
import { orderedCake, restockedCake } from '../cake/cakeSlice';
import store from '../../app/store';
export default function CakeView() {
  console.log(orderedCake, restockedCake, store.getState());

  return (
    <div>
      <h2>Number of cakes - </h2>
      <button onClick={orderedCake}>Order cake</button>
      <button onClick={restockedCake}>Restock cakes </button>
    </div>
  );
}
