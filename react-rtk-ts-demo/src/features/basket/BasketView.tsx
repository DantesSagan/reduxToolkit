/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchBasket, nullBasket, nullOrdered, orderedBasket } from './basketSlice';

export default function BasketView() {
  const dispatch = useAppDispatch();
  const baskets = useAppSelector((state) => state.basket);
  const basketAll = baskets.basket.map((item) => item.basketAllPrice);
  const orderedAll = baskets.basket.map((item) => item.numOfOrdered);
  const numOfPrice = Number(basketAll);
  const numOfOrdered = Number(orderedAll);

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  return (
    <header className='w-fill h-20 mt-4 bg-black border-b-8 border-red-600'>
      <div className='text-3xl float-right text-white grid grid-rows-1 grid-flow-col'>
        {baskets.loading && <div>Loading...</div>}
        {!baskets.loading && baskets.error && (
          <div className='font-bold text-3xl bg-red-600 rounded-lg'>
            Error 404
          </div>
        )}
        {!baskets.loading && (
          <div className='col-span-2'>
            Ordered - {numOfOrdered} Price - {numOfPrice}{' '}
            <button
              onClick={() => {
                dispatch(nullBasket(0));
                dispatch(nullOrdered(0));
              }}
              className='ml-1 bg-red-600 rounded-lg border-2 border-black hover:bg-red-500'
            >
              Default
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
