import React from 'react';
import { useSelector } from 'react-redux';

export default function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams} </h2>
      <button className='mr-1 p-4 bg-green-700 rounded-lg border-2 border-white hover:bg-green-600'>
        Order ice creams
      </button>
      <button className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-black hover:bg-red-500'>
        Restock ice creams
      </button>
    </div>
  );
}
